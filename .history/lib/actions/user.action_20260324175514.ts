'use server';

import { ID, Models, Query, ImageGravity } from "node-appwrite";
import { Client, Account, Databases, Storage } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { revalidatePath } from "next/cache";

type FileType = "image" | "video";

interface signInProps {
  email: string;
  password: string;
}

interface getUserInfoProps {
  userId: string;
}

type SignUpParams = {
  username: string;
  email: string;
  password: string;
};

interface CreateVideoPostForm {
  title: string;
  thumbnail: File;
  video: File;
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

// ---------------------------
// Admin Client
// ---------------------------
export const createAdminClient = () => {
  const client = new Client()
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!); // Admin key

  return {
    client,
    account: new Account(client),
    database: new Databases(client),
    storage: new Storage(client),
  };
};

// ---------------------------
// Session Client (user-level)
// ---------------------------
export const createSessionClient = () => {
  const client = new Client()
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!);

  const session = cookies().get("appwrite-session");
  if (session?.value) client.setSession(session.value);

  return {
    client,
    account: new Account(client),
    database: new Databases(client),
    storage: new Storage(client),
  };
};

// ---------------------------
// Get user info by userId
// ---------------------------
export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = createAdminClient();

    const user = await database.listDocuments(DATABASE_ID!, USER_COLLECTION_ID!, [
      Query.equal('account', userId)
    ]);

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.error("Get User Info Error:", error);
    return null;
  }
};

// ---------------------------
// SignUp
// ---------------------------
export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, username } = userData;

  try {
    const { account, database } = createAdminClient();

    // 1️⃣ Create user
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Error creating user");

    // 2️⃣ Create user document in DB
    const avatarUrl = `https://cloud.appwrite.io/v1/avatars/initials?name=${username}&project=${PROJECT_ID}`;
    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        account: newAccount.$id,
        email,
        username,
        avatars: avatarUrl
      }
    );

    // 3️⃣ Create session for the new user
    const { account: sessionAccount } = createSessionClient();
    const session = await sessionAccount.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error: any) {
    console.error("SignUp Error:", error);
    throw new Error(error.message || "SignUp failed");
  }
};

// ---------------------------
// SignIn
// ---------------------------
export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = createSessionClient();

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await account.get();
    const userDoc = await getUserInfo({ userId: user.$id });

    return parseStringify(userDoc);
  } catch (error: any) {
    console.error("SignIn Error:", error);
    throw new Error(error.message || "SignIn failed");
  }
};

// ---------------------------
// Get logged-in user
// ---------------------------
export async function getLoggedInUser() {
  try {
    const { account } = createSessionClient();
    const user = await account.get();
    if (!user) return null;

    const userDoc = await getUserInfo({ userId: user.$id });
    return parseStringify(userDoc);
  } catch (error) {
    console.error("Get Logged In User Error:", error);
    return null;
  }
}

// ---------------------------
// Logout
// ---------------------------
export const logoutAccount = async () => {
  try {
    const { account } = createSessionClient();
    await account.deleteSession('current');
    cookies().delete('appwrite-session');
    return true;
  } catch (error) {
    console.error("Logout Error:", error);
    return false;
  }
};

// ---------------------------
// Upload file
// ---------------------------
export async function uploadFile(file: File, type: FileType): Promise<string> {
  const { storage } = createSessionClient();
  const uploadedFile = await storage.createFile(BUCKET_ID!, ID.unique(), file);

  return generateFileUrl(uploadedFile.$id, type);
}

// ---------------------------
// Generate file URL
// ---------------------------
export async function generateFileUrl(fileId: string, type: FileType): Promise<string> {
  if (type === "video") {
    return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
  }

  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}&width=2000&height=2000&gravity=top&quality=100`;
}

// ---------------------------
// Create Video Post
// ---------------------------
export async function createVideoPost(form: CreateVideoPostForm): Promise<Models.Document> {
  try {
    const { account, database } = createSessionClient();
    const loggedIn = await account.get();
    if (!loggedIn) throw new Error("User not logged in");

    const user = await getUserInfo({ userId: loggedIn.$id });
    if (!user) throw new Error("User not found");

    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile(form.thumbnail, "image"),
      uploadFile(form.video, "video"),
    ]);

    const newPost = await database.createDocument(
      DATABASE_ID!,
      DOC_COLLECTION_ID!,
      ID.unique(),
      {
        title: form.title,
        thumbnail: thumbnailUrl,
        video: videoUrl,
        prompt: form.prompt,
        creator: user.$id,
      }
    );

    return newPost;
  } catch (error: any) {
    console.error("Create Video Post Error:", error);
    throw new Error(error.message || "Failed to create video post");
  }
}

// ---------------------------
// Get all posts
// ---------------------------
export async function getAllPosts() {
  try {
    const { database } = createAdminClient();
    const posts = await database.listDocuments(DATABASE_ID!, DOC_COLLECTION_ID!);
    return posts.documents;
  } catch (error: any) {
    console.error("Get All Posts Error:", error);
    throw new Error(error.message || "Failed to fetch posts");
  }
}

// ---------------------------
// Get user posts
// ---------------------------
export async function getUserPosts(userId: string) {
  try {
    if (!userId) return [];

    const { database } = createAdminClient();
    const posts = await database.listDocuments(
      DATABASE_ID!,
      DOC_COLLECTION_ID!,
      [Query.equal("creator", userId)]
    );
    return posts.documents;
  } catch (error: any) {
    console.error("Get User Posts Error:", error);
    throw new Error(error.message || "Failed to fetch user posts");
  }
}

// ---------------------------
// Delete Video Post
// ---------------------------
export async function deleteVideoPost(postId: string) {
  try {
    const { database } = createSessionClient();
    await database.deleteDocument(DATABASE_ID!, DOC_COLLECTION_ID!, postId);
    revalidatePath("/");

    return { success: true };
  } catch (error: any) {
    console.error("Delete Video Post Error:", error);
    throw new Error(error.message || "Failed to delete video post");
  }
}