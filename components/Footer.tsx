import { socialMedia } from '@/lib/data'
import React from 'react'

const Footer = () => {
  return (
    <div className=' -mx-10 px-20 py-10 mt-40 bg-[#252525] '>
        <div className=' flex flex-row  gap-5'>
            <img className=' size-20 object-contain' src="/logo.png" alt="" />

            <div>
                <h1 className=' font-bold text-2xl'>Join Our Community</h1>
                <h3 className=' text-sm text-gray-400'>Giveaways, gaming gear, our discord channel and more</h3>
<div className=' flex flex-row items-center gap-5 mt-5'>
                {socialMedia.map((item,id)=>(
                    
                        <img  key={id} className=' size-6' src={item.img}alt="" />

                   
                ))}
                 </div>
            </div>
        </div>

    </div>
  )
}

export default Footer