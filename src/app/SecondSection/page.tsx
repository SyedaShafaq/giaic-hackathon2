import React from 'react'
import Cart from './card'

 

const OurProducts = () => {
  return (
    <div className='bg-background mx-auto'>
        <div className='lg:w-[1236px] w-[95%] h-[1084px] relative top-[700px] lg:top-[210px] lg:left-[102px]'>
<div className=''>
    <h1 className='text-black text-3xl font-bold text-center'>Our Products</h1>
</div>
 <Cart/>
<div className='flex justify-center items-center mt-5'>

<button className="lg:px-9 lg:py-3 font-semibold border-2 border-primary text-black rounded-md hover:bg-primary">
            Show More
          </button>
</div>
        </div>
      
    </div>
  )
}

export default OurProducts
