import { socialMedia } from '@/lib/data'
import React from 'react'

const Footer = () => {
  return (
    <div className=' mb-10 flex flex-row justify-between items-center'>
        <h1>
            Copyright @2024 Riad zergui
        </h1>
        <div className=' items-center flex flex-row gap-5'>
            {socialMedia.map((item,id)=>(
                <div key={id}>
                    <button >
                        <img alt={item.img} src={item.img}/>
                    </button>
                    
                    
                </div>
            ))}
        </div>

    </div>
  )
}

export default Footer