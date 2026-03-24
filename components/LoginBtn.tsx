import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginBtn = () => {
  return (
    <button className=' w-full bg-red-600 p-3  relative items-center justify-center mt-10 '>
     <Link href={'page'}>
    
      {/* Top Left */}
      <span className="absolute -top-[5px] -left-[5px] w-4 h-4 border-t-1 border-l-1 border-[#66C4FF] "></span>

      {/* Top Right */}
      <span className="absolute -top-[5px] -right-[5px] w-4 h-4 border-t-1 border-r-1 border-[#66C4FF] "></span>

      {/* Bottom Left */}
      <span className="absolute -bottom-[5px] -left-[5px] w-4 h-4 border-b-1 border-l-1 border-[#66C4FF] "></span>

      {/* Bottom Right */}
      <span className="absolute -bottom-[5px] -right-[5px] w-4 h-4 border-b-1 border-r-1 border-[#66C4FF] "></span>
      <Image
        src="/bgbtn.png"
        alt="Background"
        fill
        className="  object-cover object-center"
       
      />

      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10  h-full  items-center justify-center text-center">
        <h1 className="text-xl md:text-xl font-bold text-black">
         LOGIN
        </h1>
        
      </div>

 </Link>

    </button>
  )
}

export default LoginBtn