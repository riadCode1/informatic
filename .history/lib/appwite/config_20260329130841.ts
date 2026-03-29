
// import { Client, Account,ID } from "appwrite";
// import config from "../config";

// type CreateUserAccount ={
//     email:string;
//     password:string;
//     name:string

// }


// type LoginUserAccount ={

//     email:string;
//     password:string

// }

// const appwriteClient = new Client()

// appwriteClient
// .setEndpoint(config.appwrite_endpoint)
// .setProject(config.appwriteProjectId)

// export const account = new Account(appwriteClient)

// export const createAcount = async ({email,password,name}:CreateUserAccount) => {

// try {

//     const UserAccount = await account.create(ID.unique(), email,password,name)

//     if(UserAccount){
//         return Login({email,password})
//     }else{
//         return UserAccount
//     }
    
// } catch (error) {
//     throw  error
// }
// }

// export const Login = async ({email,password}:LoginUserAccount) => {

//     try {
//         return await account.createEmailPasswordSession(email,password)

        
//     } catch (error) {
//         throw error
//     }
// }

// export const isLoggedIn = async (): Promise<boolean> => {
//     try {
//         const data = await account.get();
        
//         return !!data;
//     } catch (error) {
//         return false;
//     }
// }

// export const Logout = async () => {
//     try {
//         await account.deleteSession('current');
        
        
//     } catch (error) {
//         return false;
//     }
// }



