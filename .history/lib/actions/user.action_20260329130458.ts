'use server';

import {  ID, Models, Query, ImageGravity, QueryTypesList } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";


import { revalidatePath } from "next/cache";
import { ReactNode } from "react";

 interface signInProps {
  email: string;
  password: string;
}
type FileType = "image" | "video";

 interface getUserInfoProps {
  userId: string;
}

declare type SignUpParams = {
  username: string;

  email: string;
  password: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

interface CreateVideoPostForm {
  title: string;
  thumbnail: File; // or any if you're using React Native (see note below)
  video: File;     // adjust type if needed
  prompt: string;
  userId: string;
}




const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_USER_DOC_ID: DOC_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_ENDPOINT: ENDPOINT,
  APPWRITE_BUCKET_ID: BUCKET_ID,
} = process.env;

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('account', userId)]
    );

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error);
  }
}

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId }) 

    return parseStringify(user);
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, username } = userData;
  


  try {
    const { account, database } = await createAdminClient();

     const {avatars } = await createSessionClient();
    

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${username} `
    );


    if(!newAccount) throw new Error('Error creating user')

  

 
  

    

    const newUser = await database.createDocument(
      DATABASE_ID!, // use the correct database ID string here
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        account: newAccount.$id,
        email: email,
        username: `${username}`,
        avatars: `https://cloud.appwrite.io/v1/avatars/initials?name=${username}&project=${PROJECT_ID}`
        
      }
    )

   
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error('Error', error);
  }
}




export async function getLoggedInUser() {

  try {
    const { account } = await createSessionClient();
    const result = await account.get();

    const user = await getUserInfo({ userId: result.$id})
      
    return parseStringify(user);
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}


export async function createVideoPost(
  form: CreateVideoPostForm
): Promise<Models.Document> {

  
  try {

    const { account, database } = await createSessionClient();
    const loggedIn = await account.get(); 

    const user = await getUserInfo({ userId: loggedIn.$id });
    if (!user) throw new Error("User not found");

    // 1. Upload and get the URL strings
    // Ensure uploadFile is returning a STRING (the URL), not a Promise
    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile(form.thumbnail, "image"),
      uploadFile(form.video, "video"),
    ]);

    // 2. Double-check: If thumbnailUrl is still an object here, 
    // the database will store "[object Promise]"
   

    const newPost = await database.createDocument(
      DATABASE_ID!,
      DOC_COLLECTION_ID!,
      ID.unique(),
      {
        title: form.title,
        thumbnail: thumbnailUrl, // Must be a string 'https://...'
        video: videoUrl,         // Must be a string 'https://...'
        prompt: form.prompt,
        creator: user.$id,       // Ensure this matches your attribute type (String or Relationship)
      }
    );

    return newPost;
  } catch (error: Error) {
    console.error("Creation Error:", error.message);
    throw new Error(error.message || "Failed to create video post");
  }
}



export async function uploadFile(
  file: File,
  type: FileType
): Promise<string> {
  const { storage } = await createSessionClient();

  const uploadedFile = await storage.createFile(
    BUCKET_ID!,
    ID.unique(),
    file
  );

  // Generate URL manually (DO NOT call getFilePreview from node SDK)
  const fileUrl = generateFileUrl(uploadedFile.$id, type);
  console.log("Generated File URL:", fileUrl);

  return fileUrl;
}


export async function getFilePreview(
  fileId: string, 
  type: FileType
): Promise<string> {
  try {
    // 1. Initialize the client (Required for Server Actions)
    const { storage } = await createSessionClient();
    const bucketId = process.env.APPWRITE_BUCKET_ID!;

    let fileUrl: string;

    if (type === "video") {
      // getFileView returns the direct link to the video file
      fileUrl = storage.getFileView(bucketId, fileId).toString();
    } else if (type === "image") {
      // getFilePreview allows for transformations
      fileUrl = storage.getFilePreview(
        bucketId,
        fileId,
        2000,   // width
        2000,   // height
        ImageGravity.Top,  // gravity
        100     // quality
      ).toString();
      console.log("Generated Image Preview URL:", fileUrl);
    } else {
      throw new Error("Invalid file type. Must be 'video' or 'image'.");
    }

    if (!fileUrl) throw new Error("Failed to generate file URL");

    // 2. CRITICAL: Convert the URL object to a plain string
    // This ensures Appwrite Database accepts it as a 'URL' attribute
    return fileUrl;

  } catch (error: Error) {
    console.error("Get File Preview Error:", error);
    throw new Error(error.message || "An unknown error occurred while fetching the file URL");
  }
}


export async function generateFileUrl(fileId: string, type: FileType): string {


  if (type === "video") {
    return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
  }

  // image preview with transformations
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}&width=2000&height=2000&gravity=top&quality=100`;
}


export async function getAllPosts() {
  try {

    
    const { database } = await createAdminClient();

    const posts = await database.listDocuments(
      DATABASE_ID!,
      DOC_COLLECTION_ID!
    );

    return posts.documents;
  } catch (error: Error) {
    console.error("Get All Posts Error:", error);
    throw new Error(error.message || "Failed to fetch posts");
  }
}


export async function getUserPosts(userId: string | number | boolean | QueryTypesList) {
  try {
     if (!userId) {
    console.log("No userId provided to getUserPosts");
    return []; // prevent crashing
  }

    const { database } = await createAdminClient();
    const posts = await database.listDocuments(
      DATABASE_ID!,
      DOC_COLLECTION_ID!,
      [Query.equal("creator", userId)]
    );

    return posts.documents;
  } catch (error: Error) {
    console.error("Get User Posts Error:", error);
    throw new Error(error.message || "Failed to fetch user posts" );
  }
}



export async function deleteVideoPost(postId: string) {
  try {
    const { account, database, storage } = await createSessionClient();

  
    // Delete the document
    await database.deleteDocument(
      DATABASE_ID!,
      DOC_COLLECTION_ID!,
      postId
    );
revalidatePath("/");
    return { success: true };
    
  } catch (error: Error) {
    console.error("Deletion Error:", error.message);
    throw new Error(error.message || "Failed to delete video post");
  }
}