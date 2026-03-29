import React from 'react'
import SwiperItems from './SwiperItems'
import { mostPopular } from '@/lib/data'
import { getAllPosts, getLoggedInUser, getUserPosts } from '@/lib/actions/user.action';

export default async function MostPopular() {
  const posts = await getAllPosts();
  const loggedIn = await getLoggedInUser();

   const userPosts = await getUserPosts(loggedIn?.$id);
  return (
     <div dir='rtl'  className=' border-l-2 px-5  w-full overflow-hidden mt-50 uppercase'>
         <h1 dir='ltr'  className=' ml-10 text-white font-bold md:text-2xl lg:text-3xl'>MOST POPULAR</h1>
         

 <SwiperItems posts={posts} className="lg:pr-20 " reverseTrue={true} reverse="rtl" items={mostPopular}/>
     
     </div>
   )
}

