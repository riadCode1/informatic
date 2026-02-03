import React from 'react'
import Grid from './Grid'

const Accessories = () => {
  return (
    <div className=' mt-50 mx-20 uppercase'>

      <div className=' flex flex-row items-center justify-between'>
       
        <h1 className=' text-white font-bold text-4xl'>Accessories</h1>

        <button className=' cursor-pointer flex flex-row items-center gap-2 justify-center'>
          <h2 className=' text-xl uppercase text-[#DBFF80] '>
            see all
          </h2>
          <img color='red' className=' size-4' src="/arrow-right.svg" alt="" />
        </button>
      </div>
        
     <Grid/>
      
      </div>
  )
}

export default Accessories