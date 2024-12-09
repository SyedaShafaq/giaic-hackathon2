import React from 'react'
import Cart from './card'

const OurProducts = () => {
  return (
    <div className='bg-background mx-auto'>
        <div className='lg:w-[1236px] lg:h-[1084px] border-1 absolute md:top-[2150px] lg:top-[1400px] top-[1800px] left-[25px] lg:left-[64px] mx-auto'>
<div>
    <h1 className='text-black text-3xl font-bold text-center'>Our Products</h1>
</div>
<Cart/>
<div className='flex justify-center items-center mt-5'>

<button className="lg:px-9 lg:py-3 border-2 border-primary text-black rounded-md hover:bg-primary">
            Show More
          </button>
</div>
        </div>
      
    </div>
  )
}

export default OurProducts
