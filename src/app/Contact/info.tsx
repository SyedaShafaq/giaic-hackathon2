import React from "react";
 

const contactData = {
  phone: "+92(301234 789)",
  email: "example@gmail.com",
  address: "Karachi,Pakistan",
  workingTime: "Monday-Friday 9:00-22:00,Saturday-Sunday 9:00-22:00",
};

const ContactInfo = () => {
  return (
    <div className="bg-background mx-auto lg:visible xl:visible invisible">
        <div className="w-[300px] h-[400px] relative top-[200px] right-[200px]">

      <div className="py-4">
        <h1 className="text-lg sm:text-xl text-black  font-bold">Contact No</h1>
        <h1 className="text-base sm:text-lg text-black text-opacity-70">
          {contactData.phone}
        </h1>
      </div>

      <div className="py-4">
        <h1 className="text-lg sm:text-xl text-Black font-bold">
          Email Address
        </h1>
        <h1 className="text-base sm:text-lg text-Black text-opacity-70">
          {contactData.email}
        </h1>
      </div>

      <div className="py-4">
        <h1 className="text-lg sm:text-xl text-black font-bold">Location</h1>
        <h1 className="text-base sm:text-lg text-black text-opacity-70">
          {contactData.address}
        </h1>

        <div className="py-4">
          <h1 className="text-lg sm:text-xl text-black font-bold">
            Working Time
          </h1>
          <h1 className="text-base sm:text-lg text-black text-opacity-70">
            {contactData.workingTime}
          </h1>
        </div>
      </div>
        </div>
    </div>
  );
};

export default ContactInfo;
