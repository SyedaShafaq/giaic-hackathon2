"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useSearchStore } from "./searchstore";

interface Product {
  _id: string;
  title: string;
   
  productImage: any;
  description: string;
  price: number;
  dicountPercentage?: number;
  tags?: string[];
  isNew?: boolean;
}

const ProductList = ({ products }: { products: Product[] }) => {
  const { query } = useSearchStore();

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-10 lg:gap-x-5 lg:gap-y-8">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product._id} className="mt-4 px-4">
            {/* Product Image */}
            <Image
              className="w-full h-[300px] object-cover rounded-lg"
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={300}
              height={300}
            />

            {/* Product Title */}
            <Link href="/Routes/Store" className="text-xl font-semibold text-center">
              {product.title}
            </Link>

            {/* Product Description */}
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">{product.description}</p>

            {/* Product Price */}
            <p className="mt-1 text-lg font-semibold text-black">Price: ${product.price}</p>

            {/* Discount Percentage */}
            
              <p className="text-red-500 font-semibold">{product.dicountPercentage}% OFF</p>
        

            {/* Product Tags */}
            {product.tags && (
              <p className="text-sm text-gray-500">Tags: {product.tags.join(", ")}</p>
            )}

            {/* New Badge */}
             {product.isNew && (
                <p className="mt-1 text-sm text-green-400">New Arrival</p>
              )}

            {/* Add to Cart Button */}
            <div className="text-center mt-3 bg-primary py-2 rounded-lg">
              <Link
                href="/Routes/Store"
                className="text-white text-sm font-medium hover:font-semibold rounded-md"
              >
                View Product
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center text-lg">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
