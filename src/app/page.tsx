 import React from 'react'
import Banner from './Banner/page'
import FirstSection from './FirstSection/page'
import OurProducts from './SecondSection/page'
import ThirdSection from './Third Section/page'
import Footer from './Footer/page'
import FuniroFurniture from './FourthSection/page'

 const home = () => {
   return (
     <div>
       <Banner/>
       <FirstSection/>
       <OurProducts/>
       <ThirdSection/>
       <FuniroFurniture/>
       <Footer/>
     </div>
   )
 }
 
 export default home
 