import React from "react";

const CustomBox = ({
  caption,
  title,
  img,
}: {
  caption: string;
  title: string;
  img: string;
}) => {
  return (
    <div className="relative flex flex-col items-center px-6 py-14 md:px-10 md:py-24 bg-[rgba(24,36,17,0.3)]">

      {/* Border elements */}
      {/* Top Left */}
      <div className="absolute -top-3 -left-3 w-[60px] md:w-[90px] h-[3px] bg-[#383838]"></div>
      <div className="absolute -top-3 -left-3 w-[3px] h-[60px] md:h-[90px] bg-[#383838]"></div>

      {/* Top Right */}
      <div className="absolute -top-3 -right-3 w-[60px] md:w-[90px] h-[3px] bg-[#383838]"></div>
      <div className="absolute -top-3 -right-3 w-[3px] h-[60px] md:h-[90px] bg-[#383838]"></div>

      {/* Bottom Right */}
      <div className="absolute -bottom-3 -right-3 w-[60px] md:w-[90px] h-[3px] bg-[#383838]"></div>
      <div className="absolute -bottom-3 -right-3 w-[3px] h-[60px] md:h-[90px] bg-[#383838]"></div>

      {/* Bottom Left */}
      <div className="absolute -bottom-3 -left-3 w-[60px] md:w-[90px] h-[3px] bg-[#383838]"></div>
      <div className="absolute -bottom-3 -left-3 w-[3px] h-[60px] md:h-[90px] bg-[#383838]"></div>

      {/* Image */}
      <div className="relative flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="size-16 md:size-20 object-contain drop-shadow-[0_1px_10px_rgba(172,194,29,1)]"
        />
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h1 className="font-bold text-lg md:text-2xl">{title}</h1>

        <p className="mt-3 text-sm md:text-base text-gray-400">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default CustomBox;
