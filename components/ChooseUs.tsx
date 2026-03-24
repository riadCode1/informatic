import React from 'react'
import CustomBox from './CustomBox'
import { ItemChoose } from '@/lib/data'

const ChooseUs = () => {
  return (
    <div className='mt-25 mx-20 items-center uppercase'>
      <h1 className='text-white text-center font-bold text-4xl'>
        WHY CHOOSE US?!
      </h1>

      <div
      
        className='
          grid 
          grid-cols-1          /* Mobile */
          sm:grid-cols-1       /* Small screens */
          md:grid-cols-2       /* Tablet */
          lg:grid-cols-3       /* Laptop */
          xl:grid-cols-4       /* Large screens */
          gap-16 
          mt-20 
          w-full
        '
      >
        {ItemChoose.map((item, id) => (
          <CustomBox
            key={id}
            title={item.title}
            caption={item.caption}
            img={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ChooseUs
