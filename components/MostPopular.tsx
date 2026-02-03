import React from 'react'
import SwiperItems from './SwiperItems'
import { mostPopular } from '@/lib/data'

const MostPopular = () => {
  return (
     <div dir='rtl'  className=' px-5  w-full overflow-hidden mt-50 uppercase'>
         <h1 dir='ltr'  className=' ml-10 text-white font-bold md:text-2xl lg:text-3xl'>MOST POPULAR</h1>
         
 <SwiperItems className="lg:pr-20 " reverseTrue={true} reverse="rtl" items={mostPopular}/>
     
     </div>
   )
}

export default MostPopular