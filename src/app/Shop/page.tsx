import Image from 'next/image'
import React from 'react'
import Cart from './cart'
import {FaVectorSquare } from 'react-icons/fa6'
 
import { RiColorFilterAiFill } from 'react-icons/ri'


const Shop = () => {
  return (
    <div className="bg-background mx-auto">
    <div className="lg:w-[1286px] h-[316px] mx-auto w-[95%] top-[119px] left-[35px] absolute ">
      <div className="relative z-100">
        <Image
          className="lg:w-full w-[300px] h-[316px] opacity-[50%]"
          src="/images/contactmain.jpg"
          alt="Contact"
          width={250}
          height={200}
        />
        <div className="lg:visible xl:visible invisible absolute z-10 flex justify-center items-center flex-col w-[296px] h-[133px] top-[61px] left-[522px]" >
        <Image
        className="flex justify-center items-center"
              src="/images/mainlogo.png "
              alt="Logo"
              width={70}
              height={32}
            />
<h1 className="text-5xl font-semibold text-center">Shop</h1>
        </div>
      </div>
      <div className='lg:w-[1286px] w-[95%] h-[100px]'>
        <div className='flex items-center mt-5 justify-evenly'>
            <span className='flex items-center'>

            <RiColorFilterAiFill />
            Filter
            </span>

         
        <p className='flex items-center'>
        <FaVectorSquare/>
            Showing 1-16 of 32 results</p>
        </div>
         
        

      </div>
       
<Cart/>
    </div>
  </div>
  )
}

export default Shop
