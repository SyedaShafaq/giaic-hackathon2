import { client } from "@/sanity/lib/client";
import ProductCard from "./buttoncard";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

 
 

export default function Products() {
  // Fetch products from Sanity
useEffect(() => {
  const fetchProducts = async () => {
    const products = await client.fetch(groq`*[_type == "product"]`);
    // handle the fetched products here
    setProducts(products);
  };
  fetchProducts();
}, []);

const [products, setProducts] = useState([]);

// Return the products grid
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product:any) => (
        <ProductCard key={product.id} productImage={product.productImage} {...product} />
      ))}
    </div>
  )
  

  

}
