"use client";
import React from "react";

const ProductSearchBar = () => {
  return (
   <div className="mt-10 flex  justify-center">
  <div
    className="relative w-full max-w-md sm:max-w-lg lg:max-w-4xl
               flex items-center gap-3
               bg-[#232323] px-4 py-3
               focus-within:ring-2 focus-within:ring-[#DBFF80]
               transition-all"
  >
        {/* ───── Borders ───── */}

        {/* Top Left */}
        <div className="absolute -top-3 -left-3
                        w-12 sm:w-16 md:w-[90px] lg:w-[200px]
                        h-[3px]
                        bg-[#383838] " />
        <div className="absolute -top-3 -left-3
                        w-[3px]
                        h-8 sm:h-10 md:h-[30px] lg:h-[25px]
                        bg-[#383838] " />

        {/* Top Right */}
        <div className="absolute -top-3 -right-3
                        w-12 sm:w-16 md:w-[90px] lg:w-[200px]
                        h-[3px]
                        bg-[#383838] " />
        <div className="absolute -top-3 -right-3
                        w-[3px]
                        h-8 sm:h-10 md:h-[30px] lg:h-[25px]
                        bg-[#383838] " />

        {/* Bottom Right */}
        <div className="absolute -bottom-3 -right-3
                        w-12 sm:w-16 md:w-[90px] lg:w-[200px]
                        h-[3px]
                        bg-[#383838] " />
        <div className="absolute -bottom-3 -right-3
                        w-[3px]
                        h-8 sm:h-10 md:h-[30px] lg:h-[25px]
                        bg-[#383838] " />

        {/* Bottom Left */}
        <div className="absolute -bottom-3 -left-3
                        w-12 sm:w-16 md:w-[90px] lg:w-[200px]
                        h-[3px]
                        bg-[#383838] " />
        <div className="absolute -bottom-3 -left-3
                        w-[3px]
                        h-8 sm:h-10 md:h-[30px] lg:h-[25px]
                        bg-[#383838] " />
        {/* ───────── Input ───────── */}
        <input
          type="text"
          placeholder="Search your Product"
          className="flex-1 bg-transparent px-2 sm:px-4
                     text-sm sm:text-base lg:text-lg
                     text-[#B7B9B3] placeholder-[#B7B9B3]
                     outline-none"
        />

        {/* ───────── Button ───────── */}
        <button type="submit" className="shrink-0">
          <img
            src="search.svg"
            alt="search"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
        </button>
      </div>

      {/* items */}

      
    </div>
  );
};

export default ProductSearchBar;
