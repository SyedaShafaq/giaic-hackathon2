 "use client";
import React from "react";
 

const ContactForm = () => {
    return (
      <div className=" bg-background p-4 sm:p-10 lg:w-[1000px] w-[85%] lg:h-[600px] h-screen ">
        <div className= "">

        <h1 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-bold">
          Get In Touch With Us
        </h1>
  
        <p className=" text-black text-balance opacity-50 mt-3 lg:text-base text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
          dolorem debitis amet quaerat exercitationem?
        </p>
        </div>
        {/**Input Field */}
        <form className="mt-8 block w-full overflow-hidden">
          <div className="mt-4">
            <label htmlFor="">Your name

            <input
              className="flex-1 flex bg-white text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-500 border-opacity-15 outline-none w-[445px]  "
              type="text"
              placeholder="Abc"
              name=""
              id=""
              />
              </label>
  
          </div>
          <div className="mt-4">

          <label  
          htmlFor="">Subject

            <input
              className="flex-1 flex bg-white text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-500  border-opacity-15 outline-none w-[445px]  "
              type="text"
              placeholder="This is an optional"
              name=""
              id=""
              />
              </label>
              </div>
          <div className="mt-4">
            <label htmlFor="">Your email

            <input
              className="flex-1 flex bg-white text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-500 border-opacity-15 outline-none w-[445px] "
              type="email"
              placeholder="Email Address"
              name=""
              id=""
              />
              </label>
               
                
             
              
   
             
          </div>
          <textarea 
          className="border-2 border-gray-500 mt-4"

           rows={8} cols={46} name="" id="">

</textarea>
           
           {/*Message Field */}
          <div className="mt-4">
  
          <button className="lg:px-9 lg:py-3  text-white bg-primary rounded-md hover:bg-yellow-800">
            Submit
          </button>
           
          </div>
        </form>
      </div>
       
    );
  };
  
  export default ContactForm;

