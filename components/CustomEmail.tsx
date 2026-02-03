import React from 'react'

const CustomEmail = () => {
  return (
   <div>
        


         <div className=" ">
      <div className="flex items-center px-4   overflow-hidden bg-black ">
        
        {/* Input */}
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 bg-transparent px-6 py-2 text-gray-300 placeholder-gray-500 outline-none text-lg"
        />

        {/* Button */}
       
      </div>
    </div>
      </div>
  )
}

export default CustomEmail