import React from "react";
import DropMenu from "./ui/DropMenu";
import DropdownItems from "./ui/DropDownItems";
import { items, mostPopular } from "@/lib/data";
import RatingStars from "./Rating";
import ShopNowButton from "./ShopNowButton";

type DropdownItemsProps = {
  title: string;
  itemsPerPage:number,
  currentPage:number
};

const ProductItems = ({title,itemsPerPage,currentPage}:DropdownItemsProps) => {
 
 const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = mostPopular.slice(startIndex, endIndex);
 
 
  return (
    <div className="  mt-20  ">
      <div className="  justify-end text-end ">
        <h1 className="font-bold mb-2 ">SORT BY</h1>

        <DropMenu />
      </div>



      <div className=" mt-10 gap-10  flex justify-between flex-row ">
        <div>

      

        <div className=" relative py-10  bg-white/12 p-10 ">

        {/* Top Left */}
<div className="absolute -top-3 -left-3
                w-8 sm:w-10 md:w-[60px] lg:w-[100px]
                h-[3px]
                bg-[#383838]" />
<div className="absolute -top-3 -left-3
                w-[3px]
                h-14 sm:h-16 md:h-[70px] lg:h-[90px]
                bg-[#383838]" />

{/* Top Right */}
<div className="absolute -top-3 -right-3
                w-8 sm:w-10 md:w-[60px] lg:w-[100px]
                h-[3px]
                bg-[#383838]" />
<div className="absolute -top-3 -right-3
                w-[3px]
                h-14 sm:h-16 md:h-[70px] lg:h-[90px]
                bg-[#383838]" />

{/* Bottom Right */}
<div className="absolute -bottom-3 -right-3
                w-8 sm:w-10 md:w-[60px] lg:w-[100px]
                h-[3px]
                bg-[#383838]" />
<div className="absolute -bottom-3 -right-3
                w-[3px]
                h-14 sm:h-16 md:h-[70px] lg:h-[90px]
                bg-[#383838]" />

{/* Bottom Left */}
<div className="absolute -bottom-3 -left-3
                w-8 sm:w-10 md:w-[60px] lg:w-[100px]
                h-[3px]
                bg-[#383838]" />
<div className="absolute -bottom-3 -left-3
                w-[3px]
                h-14 sm:h-16 md:h-[70px] lg:h-[90px]
                bg-[#383838]" />


    <h1 className=" font-semibold mb-5">FILTER BY</h1>

    <DropdownItems title="BRAND"/>
    <DropdownItems title="COLOR"/>
    <DropdownItems title="PRICE"/>
    <DropdownItems title="SIZE"/>


        </div> 
         </div>

         {/*ItemsProducts */}

        <div  className=" w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-center text-center " >
          {paginatedItems.map((s,id)=>(

            <div key={id}>
                <div  className=" w-full items-center text-center " >
            <div className="relative flex  items-center justify-center rounded-2xl p-6 ">
              {/* Background gradient + glow */}
              <div className={s.className} />

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl  opacity-20 blur-[120px]" />

              {/* Your image */}
              <img src={s.image} alt="keyboard" className="relative z-10" />

              {/* Discount badge */}
              <div className="absolute top-2 left-2 z-20 bg-red-500 text-white sm:text-sm text-xl font-bold sm:px-2 sm:py-1 px-4 py-2 rounded-xl">
                -20%
              </div>
            </div>
            <div className=" mt-5 font-bold text-start text-4xl sm:text-xl ">{s.name}</div>
            <div className=" mt-2 text-md sm:text-sm text-start text-[#D3DDBC]">
              {s.description}
            </div>

            <div className=" flex-wrap flex text-start gap-2 mt-10">
              <RatingStars
               
                ratings={s.rating}
                
               
              />
              <h4 className=" text-gray-400">(155)</h4>

               <div className=" ml-2 gap-1 flex flex-row">
              {s.price}
              <span className=" line-through text-[#FFA199]">{s.oldPrice}</span>
            </div>
            </div>
           
            <ShopNowButton />
            <div className=" h-1"></div>
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
