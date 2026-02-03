"use client";

export default function ShopNowButton() {
  return (
    <button
      className=" 
        relative w-[98%]   h-full mt-2 py-4 p-2
        text-[#d6ff6c] font-semibold tracking-widest
        bg-[radial-gradient(circle,_rgba(0,0,0,0.3)_1px,_#3a452c_1px)]
        [background-size:7px_7px]
        items-center justify-center
        border border-white/30
      "
    >
      SHOP NOW

      {/* OUTER FRAME */}
   

      {/* INNER FRAME */}
      

      {/* CORNER CUTS */}
      {/* Top Left */}
      <span className="absolute -top-[5px] -left-[5px] w-4 h-4 border-t-1 border-l-1 border-[#66C4FF] rounded-sm"></span>

      {/* Top Right */}
      <span className="absolute -top-[5px] -right-[5px] w-4 h-4 border-t-1 border-r-1 border-[#66C4FF] rounded-sm"></span>

      {/* Bottom Left */}
      <span className="absolute -bottom-[5px] -left-[5px] w-4 h-4 border-b-1 border-l-1 border-[#66C4FF] rounded-sm"></span>

      {/* Bottom Right */}
      <span className="absolute -bottom-[5px] -right-[5px] w-4 h-4 border-b-1 border-r-1 border-[#66C4FF] rounded-sm"></span>
    </button>
  );
}
