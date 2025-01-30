"use client";

import { useCartStore } from "./cart";
import Image from "next/image";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  productImage: string;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  price,
  productImage,
}) => {
  const { addToCart } = useCartStore();

  

  return (
    <div className="border p-4 rounded-md shadow-sm">
      <Image
        src= {productImage}
        alt={title}
        width={200}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">${price.toLocaleString()}</p>


      <button
        onClick={() =>
          addToCart({ id, title, price, productImage, quantity: 1 })
        }
        className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
