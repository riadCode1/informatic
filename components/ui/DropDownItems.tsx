"use client";
import { useState } from "react";
s
export default function DropdownItems({title}:{titel:string}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 mb-2 ">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-row justify-between bg-white/20 border border-[#333333] px-4 py-3 uppercase font-semibold text-white"
      >
       {title}
       <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="w-5 h-5"
>
    {open && (
        <polyline points="18 15 12 9 6 15" />
    )}
     {!open && (
       <polyline points="6 9 12 15 18 9" />
    )}

</svg>
      </button>

      {/* DROPDOWN (pushes content) */}
      {open && (
       <div className="mt-2 border border-[#333333] uppercase">
  <label className="flex items-center w-full px-4 py-2 hover:bg-[#3a3939] cursor-pointer justify-between">
    Most Popular
    <input type="checkbox" className="ml-2 accent-blue-500" />
  </label>
  
  <label className="flex items-center w-full px-4 py-2 hover:bg-[#3a3939] cursor-pointer justify-between">
    Best Selling
    <input type="checkbox" className="ml-2 accent-blue-500" />
  </label>
  
  <label className="flex items-center w-full px-4 py-2 hover:bg-[#3a3939] cursor-pointer justify-between">
    Latest
    <input type="checkbox" className="ml-2 accent-blue-500" />
  </label>
  
  <label className="flex items-center w-full px-4 py-2  hover:bg-[#3a3939] cursor-pointer justify-between">
    Rarest
    <input type="checkbox" className="ml-2 accent-blue-500" />
  </label>
</div>

      )}

      
    </div>
  );
}
