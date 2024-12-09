import React from "react";

const Footer = () => {
  return (
    <div className="bg-background mx-auto">
      <div className="lg:w-[1350px] w-[95%] h-[505px] absolute md:top-[4900px] top-[6000px] lg:top-[3200px] bg-background left-[4px]">
        <div className="flex w-[70%] h-[50%] mx-auto ">
          <div className="p-5">
            <h1 className="text-xl font-semibold">Funiro.</h1>
            <p className="text-lg">400 university Drive Suite 200 Coral Gables</p>
            <p className="text-lg">Fl 33134 USA</p>
          </div>
          <div className="w-[85px] p-5">
            <h1 className="mb-5 font-semibold">Links</h1>
            <ul>
              <li className="py-2 font-semibold">Home</li>
              <li className="py-2 font-semibold">Shop</li>
              <li className="py-2 font-semibold">About</li>
              <li className="py-2 font-semibold">Contact</li>
            </ul>
          </div>
          <div className="w-[215px] p-5">
            <h1 className="px-3 mb-5 font-semibold">Help</h1>
            <h2 className="px-3 py-2 font-semibold">Payment Options</h2>
            <h2 className="px-3 py-2 font-semibold">Returns</h2>
            <h2 className="px-3 py-2 font-semibold">Privacy Policies</h2>
          </div>
          <div className="w-[25px] p-5 ">
            <h1 className="mb-5 font-semibold">Newsletter</h1>
            <input type="Email" placeholder="Enter your Email Address" />
          </div>
        </div>
        <div className="w-full border-b-2  "></div>
        <h1 className="text-center mt-2">2023 furino.All right reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
