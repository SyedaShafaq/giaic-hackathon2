import React from 'react'
import CarouselSlider  from './slide'
 

const ThirdSection = () => {
  return (
    <div className='bg-background mx-auto'>
        <div className='lg:w-[1440px] w-[95%] lg:h-[670px] relative top-[10200px] lg:top-[1903px]'>
<div className='flex justify-evenly'>
  <div className='text-black lg:w-[30%] w-[70%] md:w-[30%] lg:text-left text-center text-balance lg-ml-2 ml-[84px]'>
    <h1 className='text-3xl font-bold '>50+ Beautiful rooms inspiration</h1>
    <p className='text-balance mb-5 mt-2'>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
    <div>
    <button className="lg:px-9 lg:py-3  text-white bg-primary rounded-md hover:bg-yellow-800">
             Explore Now
          </button>
    </div>
  </div>
    <CarouselSlider />
</div>
        </div>
      
    </div>
  )
}

export default ThirdSection
