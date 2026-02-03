import React from "react";
import { PlaceholdersAndVanishInputDemo } from "./Searchbar";
import Image from "next/image";
import { NavMenu } from "./ui/NavMenu";
import { NavbarDemo } from "./NavItem";
import Link from "next/link";

const Nav = () => {
  return (
    <section className="  relative   items-center justify-center     w-full">
    
      <div className=" bg-[#252525]   w-full">
        <div className=" justify-center lg:block hidden   sm:hidden p-2 text-center text-black font-bold bg-[#CFFF55]">
          Log in to unlock exclusive discounts—only available for a limited
          time!
        </div>
        <Link href={"/"}>
        
        <div className=" items-center cursor-pointer lg:hidden sm:flex bg-[#121212] absolute top-0   justify-center  w-full ">
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
         


       
        </div>
        </Link>

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

        <NavbarDemo/>
      </div>
    </section>
  );
};

export default Nav;
