"use client";
import React, { useEffect, useRef, useState } from "react";
import { PlaceholdersAndVanishInputDemo } from "./Searchbar";
import Image from "next/image";
import { NavbarDemo } from "./NavItem";
import Link from "next/link";
import Modal from "./Modal";

const Nav = ({avatar, username}:{avatar?:string, username:string}) => {

  console.log("avatar", avatar);
   const [open, setOpen] = useState(false);
   const menuRef = useRef<HTMLDivElement>(null);

   const handleOpen = () => {
    if(open === false){
      setOpen(true);
    }else{      setOpen(false);
    }
    
   }

     useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section ref={menuRef} className="  relative   items-center justify-center     w-full">
    
      <div className=" bg-[#252525]   w-full">
        <div className=" justify-center lg:block hidden   sm:hidden p-2 text-center text-black font-bold bg-[#CFFF55]">
          Log in to unlock exclusive discounts—only available for a limited
          time!
        </div>
        <Link href={"/"}>
        
        <div className=" items-center cursor-pointer lg:hidden sm:flex bg-[#121212] absolute top-0   justify-center  w-full ">
          <Image
            src={"/techEss.png"}
            alt="Local example"
            fill={false}
            width={200}
            height={100}
            className=" object-contain   "
            priority // loads with high priority
            // automatic blur for imported images
          />
         


       
        </div>
        </Link>
        <h1>Welcome, {username || "Guest"}!</h1>

        <div className=" items-center lg:flex hidden   sm:hidden gap-3  justify-between flex-wrap px-10 py-6 w-full bg-[#383838]">
          <Image
            src="/techEss.png"
            alt="Local example"
            fill={false}
            width={200}
            height={100}
            className=" object-contain   "
            priority // loads with high priority
            // automatic blur for imported images
          />
          <PlaceholdersAndVanishInputDemo />


          <div className=" flex flex-row sm:gap-0 md:gap-2 lg:gap-6  ">
            <Image
            src="/shopping_cart.svg"
            alt="Local example"
            fill={false}
            width={25}
            height={25}
            className=" object-contain  "
            priority // loads with high priority
            // automatic blur for imported images
          />
     

      {avatar ? (
        <div className=" flex flex-row  gap-3 lg:gap-6  ">

       
 
  
  
          <button  onClick={() => setOpen(!open)}>
        <img style={{width:30,height:30,objectFit:"cover",borderRadius:50}} src={avatar} alt="Avatar" />

          </button>
          {open && (
             <Modal username={username} avatar={avatar} isOpen={open} onClose={() => setOpen(false)}/>
 )}
          
          
             </div>
      ) : (
 <Link href={"/signUp"}>
       <Image
            src="/profile.svg"
            alt="Local example"
            fill={false}
            width={25}
            height={25}
            className="  object-contain  "
            priority // loads with high priority
            // automatic blur for imported images
          />
 </Link>
      )}

    
      
     
          

           <Image
            src="/lang.svg"
            alt="Local example"
            fill={false}
            width={25}
            height={25}
           className="  object-contain  "
            priority // loads with high priority
            // automatic blur for imported images
          />
          
          
          
          
          </div>
          
        </div>

        <NavbarDemo avatar={avatar} username={username} />
      </div>
    </section>
  );
};

export default Nav;
