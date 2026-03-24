"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import RatingStars from "./Rating";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { id: 1,name:"mira", color: "bg-red-400", img: "/testemo1.png", avatar: "ava1.jpg" },
    { id: 2,name:"katarina", color: "bg-blue-400", img: "/testemo2.png", avatar: "ava2.jpg" },
    { id: 3,name:"jamal R", color: "bg-green-400", img: "/testemo3.png", avatar: "ava1.jpg" },
    { id: 4,name:"riad Zer", color: "bg-yellow-400", img: "/testemo1.png", avatar: "ava2.jpg" },
    { id: 5,name:"sofy", color: "bg-purple-400", img: "/testemo2.png", avatar: "ava1.jpg" },
  ];

  return (
    <div className=" mt-25 mx-20 ">
      <div className="text-white text-center mb-10">
        <h1 className="text-white text-center font-bold text-4xl">
          THE FAVOURITE DESTINATION FOR THOUSANDS
        </h1>

        <div className=" mt-5 flex flex-row items-center justify-center gap-5">
            <p>
          MORE THAN 50,000 costumer gave 5 stars to their experience with us </p>
         
            <RatingStars ratings={5}/>
            </div>

        
            
         
       
      </div>
<Swiper
  modules={[Pagination, Autoplay]}
  centeredSlides={true}
  spaceBetween={20}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="mySwiper"
  autoplay={{ delay: 4500, disableOnInteraction: false }}
  loop={true}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>

        {items.map((item, index) => {
          const isCenter = index === activeIndex;

          return (
            <SwiperSlide key={item.id}>
              <div
  className={` overflow-hidden
    w-full h-full mb-20 transition-all duration-300
    bg-[#1E1E1E] 
    ${
      isCenter
        ? "scale-105 md:scale-110 shadow-xl"
        : "scale-95 md:scale-90 opacity-70"
    }
  `}
>
                <div className=" items-center overflow-hidden w-full h-1/2">
                  <img
                    className=" w-full overflow-hidden h-full object-contain"
                    src={item.img}
                    alt=""
                  />
                </div>


                <div className=" mt-10 px-5 items-center flex flex-row gap-2">
                  <div className=" rounded-full overflow-hidden w-10 h-10">
                    <img
                      className=" w-full h-full object-cover "
                      src={item.avatar}
                      alt=""
                    />
                  </div>

                  <div className=" items-center ">
                    <h1 className=" text-2xl font-bold">{item.name}</h1>
                    <h3 className=" text-[#D4FF66] lowercase items-center gap-2 flex flex-row">
                      Verified Buyers
                      <span>
                        <img className=" size-4" src="verified.svg" alt="" />
                      </span>
                    </h3>
                  </div>
                </div>

                <div className=" flex flex-row items-center gap-5 my-5 mx-5 overflow-hidden rounded-lg bg-[#2F2F2F]">
                    <div className=" rounded-2xl  overflow-hidden p-1 w-20 h-full">
                        <img className=" w-full bg-[rgba(138,116,116,0.56)] rounded-lg overflow-hidden h-full object-cover" src="item6.png" alt="" />
                    </div>
                    <div>
                        <h1 className=" font-bold md:text-sm lg:text-md">Reviewing</h1>
                        <h3 className="  md:text-sm lg:text-md">APEX PRO LEGEND KEYBOARD</h3>
                    </div>

                </div>

                <div className=" mx-5 my-5 flex flex-row justify-between">
                    
                    <RatingStars ratings={5}/>
                    <h1 className=" lowercase font-extralight text-[#D3DDBC]">Jul 29,2025</h1> 
                    
                </div>

                <div className=" mx-5 py-5">
                    <h1>THE COSTUMER SERVICE WAS THERE FOR ME MOR THAN MY GF LOL</h1>
                    <p className=" font-extralight text-gray-400 text-sm">“I bought a headset and was blown away by the sound quality. Their support team was super helpful too.”</p>
                </div>


              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
