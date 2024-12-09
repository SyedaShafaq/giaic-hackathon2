"use client";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
 

import { FaMagnifyingGlass, FaRegHeart, FaUserPen } from "react-icons/fa6";

import { TiShoppingCart } from "react-icons/ti";
import { usePathname} from "next/navigation";
import Image from "next/image";


{
    /**Making links through usePath() */
  }
  const link = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "shop",
      path: "/Shop",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "contact",
      path: "/Contact",
    },
  ];
  
  const Header = () => {
    const pathname = usePathname();
  
    const [nav, ] = useState(false);
    return (
      <header>
        <nav className="bg-white w-full h-[100px] ">
          <div className="flex flex-wrap justify-evenly items-center 2xl:h-[41px] mx-auto w-[95%] 2xl:w-[1286px] top-[29px] absolute">
            <span className="self-center flex items-center text-3xl font-bold whitespace-nowrap dark:text-white ">
              <Image
                src="/images/mainlogo.png "
                alt="Logo"
                width={50}
                height={32}
              />
              Furniro
            </span>
  
            <div
              className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
                nav
                  ? "absolute top-14 left-0 w-full bg-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                  : "hidden md:flex gap-6"
              }`}
            >
              <ul className="flex flex-col md:flex-row md:gap-8 space-x-5  ">
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:font-bold font-medium text-black rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Shop"
                    className="block py-2 pr-4 pl-3 hover:font-bold font-medium text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Shop
                  </Link>
                </li>
                 
                <li>
                  <Link
                    href="/Contact"
                    className="block py-2 pr-4 pl-3 hover:font-bold font-medium text-black  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 hover:font-bold font-medium text-black hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
  <div className="flex justify-between items-center space-x-5 m-3 px-3">
  
              <FaUserPen/>
              <FaMagnifyingGlass />
              <FaRegHeart />
              <TiShoppingCart />
  </div>
            </div>
  
            <div className="xl:hidden lg:hidden">
              <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                  <CiMenuFries className="text-[32px] text-black" />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                  {/** For Logo */}
                  <div className="mt-28 mb-35 text-center text-2xl flex items-center justify-center ">
                    <Image
                      src="/images/mainlogo.png "
                      alt="Logo"
                      width={50}
                      height={32}
                    />
                    <h1 className="text-2xl font-semibold">Furniro</h1>
                  </div>
                  {/** For Navigation Links */}
                  <nav className="flex flex-col justify-center items-center gap-8">
                    {link.map((link, index) => {
                      return (
                        <Link
                          href={link.path}
                          key={index}
                          className={`${
                            link.path === pathname &&
                            "text-black border-b-2 border-[#d2c3be]"
                          } hover:font-bold text-xl capitalize  transition-all`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  