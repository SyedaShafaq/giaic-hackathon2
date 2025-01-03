 
 import React from "react";
 import '@fortawesome/fontawesome-free/css/all.min.css';


 const  ContactForm = () => {
   return (
     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
       {/* Header */}
       <div className="text-center max-w-2xl">
         <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
         <p className="mt-2 text-gray-600">
           For More Information About Our Product & Services, Please Feel Free To Drop Us
           An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
         </p>
       </div>
 
       {/* Main Content */}
       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
         {/* Left Section: Contact Information */}
         <div className="space-y-8">
           {/* Address */}
           <div className="flex items-start space-x-4">
             <div className=" text-2xl">
             <i className="fas fa-map-marker-alt"></i>
             </div>
             <div>
               <h3 className="text-lg font-semibold">Address</h3>
               <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
             </div>
           </div>
 
           {/* Phone */}
           <div className="flex items-start space-x-4">
             <div className=" text-2xl">
             <i className="fas fa-phone"></i>
             </div>
             <div>
               <h3 className="text-lg font-semibold">Phone</h3>
               <p className="text-gray-600">Mobile: +(84) 546-6789</p>
               <p className="text-gray-600">Hotline: +(84) 456-6789</p>
             </div>
           </div>
 
           {/* Working Time */}
           <div className="flex items-start space-x-4">
             <div className=" text-2xl">
             <i className="fas fa-clock"></i>
             </div>
             <div>
               <h3 className="text-lg font-semibold">Working Time</h3>
               <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
               <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
             </div>
           </div>
         </div>
 
         {/* Right Section: Contact Form */}
         <div>
           <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
             {/* Name Field */}
             <div>
               <label htmlFor="name" className="block text-gray-700 font-semibold">
                 Your name
               </label>
               <input
                 type="text"
                 id="name"
                 placeholder="Abc"
                 className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
               />
             </div>
 
             {/* Email Field */}
             <div>
               <label htmlFor="email" className="block text-gray-700 font-semibold">
                 Email address
               </label>
               <input
                 type="email"
                 id="email"
                 placeholder="Abc@def.com"
                 className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
               />
             </div>
 
             {/* Subject Field */}
             <div>
               <label htmlFor="subject" className="block text-gray-700 font-semibold">
                 Subject
               </label>
               <input
                 type="text"
                 id="subject"
                 placeholder="This is an optional"
                 className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
               />
             </div>
 
             {/* Message Field */}
             <div>
               <label htmlFor="message" className="block text-gray-700 font-semibold">
                 Message
               </label>
               <textarea
                 id="message"
                 rows={4}
                 placeholder="Hi! I’d like to ask about"
                 className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
               ></textarea>
             </div>
 
             {/* Submit Button */}
             <button
               type="submit"
               className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
             >
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   );
 };
 
 export default ContactForm;
 