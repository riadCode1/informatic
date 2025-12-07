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
    <div className="w-full max-w-[1300px] mx-auto relative flex items-center justify-center">

      {/* Corner decorations */}
      <div className="absolute top-[-10px] left-[-10px] w-10 h-10 border-l-2 border-t-2 border-white z-20"></div>
      <div className="absolute bottom-[-10px] left-[-10px] w-10 h-10 border-l-2 border-b-2 border-white z-20"></div>
      <div className="absolute top-[-10px] right-[-10px] w-10 h-10 border-r-2 border-t-2 border-white z-20"></div>
      <div className="absolute bottom-[-10px] right-[-10px] w-10 h-10 border-b-2 border-r-2 border-white z-20"></div>

      {/* Custom Prev Button */}
      <button className="custom-prev absolute top-1/2 left-[-10px] -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3">
        <svg width="20" height="20" stroke="white" strokeWidth="2" fill="none">
          <path d="M13 4L7 10L13 16" />
        </svg>
      </button>

      {/* Custom Next Button */}
      <button className="custom-next absolute top-1/2 right-[-10px] -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3">
        <svg width="20" height="20" stroke="white" strokeWidth="2" fill="none">
          <path d="M7 4L13 10L7 16" />
        </svg>
      </button>

      {/* Swiper */}
    <Swiper
  modules={[Navigation, Pagination, Autoplay, EffectFade]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ el: ".custom-pagination", clickable: true }}
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  loop={true}
  effect="fade"

>
        {slides.map((s, i) => (
          <SwiperSlide className="border-4 border-gray-400 p-2" key={i}>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.alt || `slide-${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <h3 className="text-lg font-medium">{s.title || "Slide"}</h3>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
                {s.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Custom Pagination at the far bottom */}
      <div className="custom-pagination absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 z-20"></div>
    </div>
  );
}
