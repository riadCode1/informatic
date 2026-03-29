import React from "react";
import SwiperItems from "./SwiperItems";
import { offerItems } from "@/lib/data";
import Link from "next/link";

const LimitedOffers = () => {
  return (
    <div className="  mt-25 overflow-hidden uppercase">
      <div className=" flex flex-row px-20 items-center justify-between">
        <h1 className=" text-white font-bold sm:text-lg md:text-2xl lg:text-3xl">
          Limited Time Offers !!
        </h1>
        <Link href={"/allProducts"}>
          <button className=" cursor-pointer flex flex-row items-center gap-2 justify-center">
            <h2 className=" sm:text-lg md:text-xl lg:text-xl uppercase text-[#DBFF80] ">
              see all
            </h2>
            <img
              color="red"
              className=" size-4"
              src="/arrow-right.svg"
              alt=""
            />
          </button>
        </Link>
      </div>
      <SwiperItems items={offerItems} reverse="true" reverseTrue={true} className="pl-20" />
    </div>
  );
};

export default LimitedOffers;
