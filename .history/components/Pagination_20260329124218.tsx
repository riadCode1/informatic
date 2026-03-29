 "use client";

 import { generatePagination } from "@/lib/utils";
 import clsx from "clsx";
 import Link from "next/link";
 import { useSearchParams } from "next/navigation";

 type Props = {
   totalPages: number;
   currentPage: number;
 };

 export default function Pagination({ totalPages, currentPage }: Props) {
   const searchParams = useSearchParams();
   const createPageUrl = (pageNumber: number | string) => {
     const params = new URLSearchParams(searchParams);
     params.set("page", pageNumber.toString());

     return `/allProducts?${params.toString()}`;
   };

   const allPages = generatePagination(currentPage, totalPages);

   return (
     <div className="flex justify-center gap-2 mt-30">
       <Link
         href={createPageUrl(currentPage - 1)}
         className={`w-10 h-10 flex items-center justify-center border transition
             ${
               currentPage === 1
                 ? "border-gray-500  text-gray-300 hover:bg-gray-800 pointer-events-none opacity-50"
                 : "border-gray-500  text-gray-300 hover:bg-gray-800"
             }`}
       >
         {" <"}
       </Link>
     

      {allPages.map((page, index) => {
   let position: "first" | "last" | "middle" | "single" = "middle";

   if (allPages.length === 1) position = "single";
    if (index === 0) position = "first";
   if (index === allPages.length - 1) position = "last";

   if (typeof page === "string" && page === "...") position = "middle";

   return (
     <PaginationItem
       key={index}
       page={page}
       isActive={currentPage === page}
       href={page === "..." ? "#" : createPageUrl(page)}
       position={position}
     />
   );
 })}


       <Link
         href={createPageUrl(currentPage + 1)}
         className={`w-10 h-10 flex items-center justify-center border transition
             ${
               currentPage >= totalPages
                 ? "border-gray-500  text-gray-300 hover:bg-gray-800 pointer-events-none opacity-50"
                 : "border-gray-500  text-gray-300 hover:bg-gray-800"
             }`}
       >
         {">"}
       </Link>
     </div>
   );
 }

 function PaginationItem({
   page,
   isActive,
   href,
   position,
 }: {
   page: number | string;
   isActive: boolean;
   href: string;
   position: "first" | "last" | "middle"|"single";
 }) {
  const className=clsx("w-10 h-10 flex items-center justify-center border transition",
  {
   "bg-[#CFFF55] text-black font-bold  border-gray-300": isActive,
   "border-gray-500 font-bold text-gray-300 hover:bg-gray-800": !isActive,
   "rounded-l-md": position==="first",
   "rounded-r-md": position==="last",
   "rounded-md": position==="single",
  }
  )
  return isActive|| position==="" ? (
   <div className={className}>{page}</div>
  ) : (
   <Link href={href} className={className}>{page}</Link>
  )
 }
