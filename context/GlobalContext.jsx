"use client";

import { isLoggedIn } from "@/lib/appwite/config";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
// import { getCurrentUser } from "../lib/appwrite";

/* =====================
   Types
===================== */




/* =====================
   Context
===================== */

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

/* =====================
   Hook
===================== */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

/* =====================
   Provider
===================== */



const GlobalProvider = ( {children} ) => {



  
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
     isLoggedIn()
       .then((res) => {
         if (res) {
           setIsLogged(true);
           setUser(res);
         } else {
           setIsLogged(false);
           setUser(null);
         }
       })
       .catch((error) => {
         console.log(error);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
