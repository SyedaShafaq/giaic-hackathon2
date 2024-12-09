 
import React from 'react'
import Cart from './cart'

const FirstSection = () => {
  return (
    <div className='mx-auto w-full h-screen bg-background'>
        <div className='lg:w-[1183px] w-[95%] lg:h-[685px] min-h-screen relative top-[45px] lg:left-[100px]' >
<div className='text-black text-center'>
    <h1 className='lg:font-bold lg:text-3xl font-semibold'>Browse The Range</h1>
    <p className=' text-black text-sm lg:text-md text-balance text-opacity-75 '>Discover our wide range of products from the latest trends and styles.</p>
</div>
 <Cart/>
        </div>
      
    </div>
  )
}

export default FirstSection
