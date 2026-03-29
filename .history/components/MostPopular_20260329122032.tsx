import React from 'react'
import SwiperItems from './SwiperItems'
import { mostPopular } from '@/lib/data'
import { getAllPosts, getLoggedInUser, getUserPosts } from '@/lib/actions/user.action';

export default async function MostPopular() {
  const posts = await getAllPosts();
  const loggedIn = await getLoggedInUser();

   const userPosts = await getUserPosts(loggedIn?.$id);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformedPosts = posts.map((post: any) => ({
    $id: post.$id,
    title: post.title,
    prompt: post.prompt,
    thumbnail: post.thumbnail,
    video: post.video,
  }));
  
  return (
     <div dir='rtl'  className=' px-5  w-full overflow-hidden mt-50 uppercase'>
         <h1 dir='ltr'  className=' ml-10 text-white font-bold md:text-2xl lg:text-3xl'>MOST POPULAR</h1>
         

 <SwiperItems posts={transformedPosts} className="shadow-[-6px_0_10px_rgba(0,0,0,0.15)] lg:pr-20 bg-amber-700 " reverseTrue={true} reverse="rtl" />
     
     </div>
   )
}

