"use client";

import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "../components/ui/NavMenu";
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInputDemo } from "./Searchbar";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return <Navbar />;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={cn("relative", className)}>
      {/* ================= MOBILE NAV ICON ================= */}
      <div
        onClick={() => setOpenMenu(true)}
        className="lg:hidden fixed top-5 right-1 z-[1000] cursor-pointer"
      >
        <img src="/nav.svg" alt="menu" className="size-8" />
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={cn(
          "fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 lg:hidden",
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpenMenu(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-[1000] h-screen w-[80%] max-w-sm bg-[#252525] px-6 py-20",
          "transform transition-transform duration-500 ease-in-out lg:hidden",
          openMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >

        
        {/* Close button */}
        <div
          onClick={() => setOpenMenu(false)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <img src="/close.svg" alt="close" className="size-7" />
        </div>

        {/* Mobile Menu Content (COLUMNS) */}
        <Link className=" cursor-pointer" href={"/"}>
        
       

<Image
                    src="/techEss.png"
                    alt="Local example"
                    fill={false}
                    width={200}
                    height={100}
                    className=" object-contain mb-5   "
                    priority // loads with high priority
                    // automatic blur for imported images
                  />
                   </Link>
        <PlaceholdersAndVanishInputDemo />

        <div className="mt-10  grid grid-cols-2 gap-6 text-white text-sm">
         
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase">Keyboards</h4>
            <a href="#">Web Dev</a>
            <a href="#">Design</a>
            <a href="#">SEO</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase">Mice</h4>
            <a href="#">Gaming</a>
            <a href="#">Wireless</a>
            <a href="#">Office</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase">Headsets</h4>
            <a href="#">Studio</a>
            <a href="#">Gaming</a>
            <a href="#">Bluetooth</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase">Accessories</h4>
            <a href="#">Controllers</a>
            <a href="#">Cables</a>
            <a href="#">More</a>
          </div>

           <div className=" flex flex-row  gap-3 lg:gap-6  ">
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
        
      </aside>

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden lg:block">
        <Menu setActive={setActive}>
           <MenuItem setActive={setActive} active={active} item="Keyboards">
          <div className="flex flex-col z-[999] space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Mice">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="headsets">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="controllers">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="cables">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="more accessories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
       
      </div>
    </div>
  );
}
