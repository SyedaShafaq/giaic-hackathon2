 // Install dependencies first: npm install next@latest tailwindcss
"use client"
// pages/index.tsx
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


type Product = {
  name: string;
  price: number;
  images: string[];
  size: string[];
  color: string[];
  sku: string;
  category: string;
  tags: string[];
  reviews: number;
  description: string;
};

export default function ProductPage(): JSX.Element {
  const [product] = useState<Product>({
    name: 'Asgaard Sofa ',
    price: 250000,
    images: [
      '/images/singleproductmain.png',
      '/images/singleproduct1.png',
      '/images/singleproduct2.png',
      '/images/singleproduct3.png',
       
    ],
    size: ['L', 'XL', 'XS'],
    color: ['#4A90E2', '#D4AF37' , '#000000'],
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
     
    reviews: 5,
    description: 'This elegant sofa set combines comfort and style, making it a perfect addition to your living space. Crafted with high-quality materials, it offers durability and a sleek design that fits seamlessly into any home decor. The sofa set comes in multiple sizes and colors to suit your preferences.'
  });

  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to the cart.`);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-1 flex flex-col space-y-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="w-full h-20 object-cover rounded-lg cursor-pointer border hover:border-blue-500"
              />
            ))}
          </div>
          <div className="col-span-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-500 text-lg mb-2">Price: Rs. {product.price}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500">

              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`fa fa-star ${i < product.reviews ? '' : 'text-gray-300'}`}></span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{product.reviews} Customer Review</span>
          </div>

          <div className="mb-4">
            <h3 className="text-gray-600 font-medium">Size</h3>
            <div className="flex space-x-2 mt-2">
              {product.size.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border rounded text-sm hover:bg-gray-100 focus:outline-none"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-gray-600 font-medium">Color</h3>
            <div className="flex space-x-2 mt-2">
              {product.color.map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full border-2`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <button onClick={decrementQuantity} className="px-4 py-2 bg-gray-200 rounded">-</button>
            <span className="text-lg">{quantity}</span>
            <button onClick={incrementQuantity} className="px-4 py-2 bg-gray-200 rounded">+</button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-[50%] py-3 border-2 border-black text-black font-semibold hover:text-white hover:border-none hover:bg-primary rounded-lg"
          >
            Add to Cart
          </button>

          <div className="mt-6 text-md">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {product.tags.join(', ')}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
      <div>
        <ProductPage/>
      </div>
    </div>
  );
}
