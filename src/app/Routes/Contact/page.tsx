import React from "react";
import ContactForm from "./form";
import Link from "next/link";
import CustomerSupport from "../CustomerSupport/page";

const Contact = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contactmain.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl text-black font-bold">Contact</h1>
        <nav className="mt-2 text-sm font-medium">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="text-black hover:underline">
                Home
              </Link>
            </li>
            <li className="text-black font-semibold">&gt;</li>
            <li className="text-black">Contact</li>
          </ul>
        </nav>
      </div>

      <ContactForm />
      <div>
        <CustomerSupport/>
      </div>
    </div>
  );
};

export default Contact;
