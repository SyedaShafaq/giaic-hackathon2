 
"use client";  

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductList from "./productList";
import SearchBar from "./searchbar";
import FilterBar from "./filterbar";
import FeaturesSection from "../CustomerSupport/page";
import Footer from "./footer";
import Link from "next/link";

const Shop = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products on the client-side
    const fetchProducts = async () => {
      const data = await client.fetch(groq`*[_type == "product"]`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/contactmain.jpg')" }}>
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl text-black font-bold">Shop</h1>
          <nav className="mt-2 text-sm font-medium">
            <ul className="flex space-x-2">
              <li><Link href="/" className="text-black hover:underline">Home</Link></li>
              <li className="text-black font-semibold">&gt;</li>
              <li className="text-black">Shop</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <SearchBar />
      </div>

      {/* Filter Bar */}
      <FilterBar />

      {/* Product List */}
      <ProductList products={products} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
