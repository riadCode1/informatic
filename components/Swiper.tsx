"use client";
import React from "react";
import Image from "next/image";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { slides } from "@/lib/data";

export default function SwiperComp() {
  return (
    <div className="w-full border-gray-600 border-4  text-center  mt-6 relative items-center justify-center">
<div className="w-full items-center justify-center">
      {/* Corner decorations */}
      <div className="absolute top-[-12px] left-[-12px] w-10 h-10 border-l-2 border-t-2 border-white z-20"></div>
      <div className="absolute bottom-[-12px] left-[-12px] w-10 h-10 border-l-2 border-b-2 border-white z-20"></div>
      <div className="absolute top-[-12px] right-[-12px] w-10 h-10 border-r-2 border-t-2 border-white z-20"></div>
      <div className="absolute bottom-[-12px] right-[-12px] w-10 h-10 border-b-2 border-r-2 border-white z-20"></div>

      {/* Custom Prev Button */}
      <button className="  custom-prev absolute top-1/2 left-[-15px] -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3">
        <svg
  viewBox="0 0 20 20"
  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
  stroke="currentColor"
  strokeWidth="2"
  fill="none"
>
  <path d="M13 4L7 10L13 16" />
</svg>
      </button>

      {/* Custom Next Button */}
      <button className="custom-next absolute top-1/2 right-[-15px] -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3">
        <svg viewBox="0 0 20 20"  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"  stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M7 4L13 10L7 16" />
        </svg>
      </button>

      {/* Swiper */}
    <Swiper
  modules={[Navigation, Pagination, Autoplay, EffectFade]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ el: ".custom-paginations", clickable: true }}
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  loop={true}
  effect="cards"
  className=" h-full"

>
        {slides.map((s, i) => (
          <SwiperSlide className="w-full h-full  p-2" key={i}>
            <div className=" overflow-hidden w-full h-full  shadow-md">
            
                <img
                  src={s.image}
                  alt={s.alt || `slide-${i}`}
                  className=" object-fill h-full w-full "
                  
                  
                />
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Custom Pagination at the far bottom */}
      
    </div>
    
    </div>
  );
}
