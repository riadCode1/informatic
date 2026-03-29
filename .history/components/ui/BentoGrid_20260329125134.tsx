// Also install this npm i --save-dev @types/react-lottie
"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-6 sm:gap-10 gap-8 lg:gap-12 mx-auto",
        className
      )}
    >
      
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "React Native", "Typescript"];
  const rightLists = ["Expo", "NextJS", "RestApi"];
  const [copied, setCopied] = useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText("riadzergui20@gmail.com")
    setCopied(true)
  }

  return (
    <button
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 cursor-pointer relative  rounded-md border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className=" w-48  md:w-38 h-1 bg-[#383838] absolute -top-3 -left-3 "></div>
      <div className=" w-1 h-38 md:h-28 bg-[#383838] absolute -left-3 -top-3"></div>
       <div className=" h-38 w-1 md:h-28 bg-[#383838] absolute -right-3 -top-3"></div>
        <div className=" md:w-38 w-48 h-1 bg-[#383838] absolute -right-3 -top-3"></div>
         <div className=" h-38 w-1 md:h-28 bg-[#383838] absolute -right-3 -bottom-8"></div>
        <div className=" md:w-38 w-48 h-1 bg-[#383838] absolute -right-3 -bottom-8"></div>
         <div className=" h-38 w-1 md:h-28 bg-[#383838] absolute -left-3 -bottom-8"></div>
        <div className=" md:w-38 w-48 h-1 bg-[#383838] absolute -left-3 -bottom-8"></div>
      
      {/* add img divs */}
      <div className={`} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={img}
              className={cn(" w-full h-full object-cover ")}
            />
          )}
        </div>
        
       

        <div
          className={cn(
            
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
         
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={` absolute font-semibold bottom-5 left-5 text-lg lg:text-3xl max-w-96  z-10`}
          >
            {title}
          </div>

          
         

        
        </div>
      </div>
    </button>
  );
};
