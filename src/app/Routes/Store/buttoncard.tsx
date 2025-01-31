 "use client";

import { useCartStore } from "./cart";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity Client
const sanityClient = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID , // Replace with your Sanity Project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

// Create Image URL Builder
const builder = imageUrlBuilder(sanityClient);

// Function to Generate Image URL Safely
const urlFor = (source: any) => source ? builder.image(source).url() : "/fallback-image.jpg";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  productImage: any; // Sanity image object
}

const ProductCard: React.FC<ProductProps> = ({ id, title, price, productImage }) => {
  const { addToCart } = useCartStore();
  const imageSrc = urlFor( productImage);

  return (
    <div className="border p-4 rounded-md shadow-sm">
       
      {productImage ? (

<Image
src={imageSrc}
alt={title}
width={250} 
height={250}
className="w-full h-[250px] object-cover rounded-md"
/>
        ) : (
          <p className="text-red-500">Image not available</p>
        )}
       
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">${price.toLocaleString()}</p>

      <button
        onClick={() => addToCart({ id, title, price, productImage, quantity: 1 })}
        className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

