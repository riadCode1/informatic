

import { Client , Account,Storage, Databases, Users, Avatars } from "node-appwrite";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  const cookieStore = await cookies();
  const session = cookieStore.get("appwrite-session");

  // ✅ Only set session if it exists
  if (session?.value) {
    client.setSession(session.value);
  }

  return {
    account: new Account(client),
    database: new Databases(client),
    storage: new Storage(client),
    avatars: new Avatars(client),
  };
};
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.NEXT_PUBLIC_API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    },
     get avatars() {
      return new Avatars(client);
    }
  };
}
