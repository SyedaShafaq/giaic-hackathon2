import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import FilterBar from "./filterbar";
import FeaturesSection from "../CustomerSupport/page";
import Footer from "./footer";

const Shop = async () => {
  const products = await client.fetch(groq`*[_type == "product"]`);
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contactmain.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl text-black font-bold">Shop</h1>
        <nav className="mt-2 text-sm font-medium">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="text-black hover:underline">
                Home
              </Link>
            </li>
            <li className="text-black font-semibold">&gt;</li>
            <li className="text-black">Shop</li>
          </ul>
        </nav>
      </div>
      <div>
        <FilterBar />
      </div>

      <div>
        <div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-col-4 gap-10 lg:gap-x-5 lg:gap-y-8">
            {products.map((product: any, index: number) => {
              return (
                <div className="mt-4">
                  {/* Product image */}
                  <Image
                    className="w-[285px] h-[300px] rounded-lg "
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                  {/* Product title */}
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  {/* Product description */}
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {product.description}
                  </p>
                  {/* Product price */}
                  <p className="mt-2 text-sm text-gray-500">
                    Price: ${product.price}
                  </p>
                  {/*dicountPercentage */}
                  <p className="text-red-500">
                    {product.dicountPercentage}%OFF
                  </p>
                  {/* Product tags */}
                  <p className="mt-2 text-sm text-gray-500">
                    Tags: {product.tags.join(", ")}
                  </p>
                  {/** New badge */}
                  <p className="mt-2 text-sm text-gray-500">
                    New Badge: {product.isNew ? "Yes" : "No"}
                  </p>

                  {/* Add to cart button */}
                  <Link
                    href={`/product/${product._id}`}
                    className="mt-2 w-full px-4 py-2 text-sm font-medium text-primary bg-background rounded-md"
                  >
                    Add to Cart
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <FeaturesSection/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Shop;
