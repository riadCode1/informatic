import { socialMedia } from "@/lib/data";
import React from "react";

const Footer2 = () => {
  return (
    <div className=" -mx-10 px-20 bg-[#1E1E1E] ">

       <div className="  px-10 flex flex-wrap justify-between gap-30 py-10 bg-[#1E1E1E] ">

      <div className=" flex flex-row  gap-10 xl:gap-20">
        {/*about */}
        <div className=" ">
          <h1 className=" mb-2 font-semibold text-xl">ABOUT</h1>

          <div className=" flex items-start flex-col gap-2 ">
            <button className="text-start cursor-pointer text-[#B7B9B3]">
              contact us
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              Blog
            </button>
            <button className="text-start cursor-pointer text-[#B7B9B3]">
              newsletter
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              jobs
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              marketplace
            </button>
          </div>
        </div>

        {/*products */}
        <div className=" ">
          <h1 className=" mb-2 font-semibold text-xl">PRODUCTS</h1>

          <div className=" flex items-start flex-col gap-2 ">
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              Keyboards
            </button>
            <button className="text-start cursor-pointer text-[#B7B9B3]">
              mice
            </button>
            <button className="text-start cursor-pointer text-[#B7B9B3]">
              headsets
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              controllers
            </button>
            <button className="text-start cursor-pointer text-[#B7B9B3]">
              cables
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              more accessories
            </button>
          </div>
        </div>

        {/*SUPPORT */}
        <div className=" items-start text-start ">
          <h1 className=" mb-2 font-semibold text-xl">SUPPORT</h1>

          <div className=" flex items-start flex-col gap-2 ">
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              Privacy policy
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              terms and conditions
            </button>
            <button className=" text- cursor-pointer text-[#B7B9B3]">
              security
            </button>
            <button className=" text-start cursor-pointer text-[#B7B9B3]">
              refund policy
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" mb-2  text-xl">Get 10% off your purchase</h1>

        <p className=" mb-10 text-[#B7B9B3]">
          Sign up and be the first to know about new products, deals and events.
          Plus, new members receive 10% OFF their first order on Turtle Beach!
        </p>


         <div className="w-full mx-auto">
      <div className="flex items-center px-4  overflow-hidden bg-gradient-to-b from-[#141414] to-[#0b0b0b] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        
        {/* Input */}
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 bg-transparent px-6 py-5 text-[#B7B9B3] placeholder-[#B7B9B3] outline-none text-lg"
        />

        {/* Button */}
        <button
          className="h-full text-sm px-2 py-2 font-bold uppercase tracking-wider
                     bg-[#4b5336] text-[#d8ff6a]
                     hover:bg-[#5d673f] transition"
        >
          Sign Up
        </button>
      </div>
    </div>
    
      </div> 

      </div>
      
         
       <h1 className=" p-10 text-[#B7B9B3] text-center">© 2025 TechEssentials. All rights reserved.</h1>
      
    </div>
  );
};

export default Footer2;
