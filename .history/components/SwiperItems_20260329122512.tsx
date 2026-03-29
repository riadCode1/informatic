"use client";
import React from "react";
import Image from "next/image";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { slides } from "@/lib/data";
import RatingStars from "./Rating";
import ShopNowButton from "./ShopNowButton";
import { cn } from "@/lib/utils";

export default function SwiperItems({
  
  reverse,
  reverseTrue,
  className,
  posts,
}: {
  
  reverse: string;
  reverseTrue:boolean,
  className:string,
  posts?:Array<{
    $id: string;
    title: string;
    prompt: string;
    thumbnail: string;
    video: string;
  }>;
}) {


  console.log("posts", posts);
  return (
    <>
  <div className={cn(" lg:overflow-hidden   mt-5 ", className)} > 
      {/* Corner decorations */}

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={25}
        slidesPerView={5}
        pagination={{ el: ".custom-pagination", clickable: true }}
      
         navigation={
        reverse==="rtl"
          ? { nextEl: ".customReverse-next", prevEl: ".customReverse-prev" }
          : { nextEl: ".customise-next", prevEl: ".customise-prev" }
      }
        autoplay={{ delay: 4500, reverseDirection:true, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        effect="cards"
        className=" lg:w-[110%] overflow-hidden "
         breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,
       // sm screens
    },
    1024: {
      slidesPerView: 4, // lg screens
    },
  }}
      >
        {posts?.map((s, i) => (
          <SwiperSlide  className="   items-center text-center b " key={i}>
            <div className="relative flex   items-center justify-center rounded-2xl p-6 ">
              {/* Background gradient + glow */}
              

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl  opacity-20 blur-[120px]" />

              {/* Your image */}
<img
  src={s.thumbnail}
  alt="keyboard"
  className="w-48 h-48 object-cover  z-10"
/>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 z-20 bg-red-500 text-white sm:text-sm text-xl font-bold sm:px-2 sm:py-1 px-4 py-2 rounded-xl">
                -20%
              </div>
            </div>
            <div className=" mt-5 font-bold text-end text-4xl sm:text-xl ">{s.title}</div>
            <div className=" mt-2 text-md h-5 sm:text-sm text-end text-[#D3DDBC]">
              {s.prompt}
            </div>

            <div className=" flex-row flex text-start gap-2 mt-10">
              <RatingStars
                
                ratings={4.5}
                
                
              />
              <h4 className=" text-gray-400">(155)</h4>

               <div className=" ml-2 gap-1 flex flex-row">
              {s.price}
              <span className=" line-through text-[#FFA199]">{s.oldPrice}</span>
            </div>
            </div>
           
            <ShopNowButton />
            <div className=" h-1"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom  Button */}
    
    </div>

      <div dir='ltr' className=" flex-row self-center justify-center flex gap-6 mt-10 ">
        <button className={`${reverse==="rtl"?"customReverse-prev":"customise-prev "} rounded-sm shadow-xl  z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3`}>
          <svg
            width="20"
            height="20"
            stroke="white"
            strokeWidth="1"
            fill="none"
          >
            <path d="M13 4L7 10L13 16" />
          </svg>
        </button>

        <button className={`${reverse==="rtl"?"customReverse-next":"customise-next "} rounded-sm shadow-xl  z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3`}>
          <svg
            width="20"
            height="20"
            stroke="white"
            strokeWidth="1"
            fill="none"
            className=" "
          >
            <path d="M7 4L13 10L7 16" />
          </svg>
        </button>
      </div>
    </>
  );
}
