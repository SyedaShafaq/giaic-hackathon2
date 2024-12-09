import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-x-5 lg:gap-y-8 m-4 lg:mt-[55px]" >
    {/* Add products */}
   <span>

        <Image
         src='/images/firstsec1.png'
         alt='Product 1'
         width={500}
         height={500}
         
         className='w-full h-[364px] ' />
        <h2 className='text-center text-black lg:text-xl mt-2 font-semibold'>Dining</h2>
         
         </span>
 

 <span>

        <Image
         src='/images/firstsec2.png'
         alt='Product 2'
         width={500}
         height={500}
         
         className='w-full h-[364px]' />
        <h2 className='text-center text-black text-xl mt-2 font-semibold'>Living</h2>
         </span>
        
 <span>

        <Image
         src='/images/firstsec3.png'
         alt='Product 3'
         width={500}
         height={500}
          
         className='w-full h-[364px]' />
        <h2 className='text-center text-black text-xl  mt-2 font-semibold'>Bedroom</h2>
         
         </span>
 
</div>
  )
}

export default Cart
