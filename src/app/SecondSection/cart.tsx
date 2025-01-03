"use client"
import React, { useState } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  tag?: string;
  category: string;
  images: string[];
};

const products: Product[] = [
  { id: 1, name: "Syltherine", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%", category: "Stylish cafe chair", images: ["/images/ourproduct1.png", "/product1_alt1.png", "/product1_alt2.png"] },
  { id: 2, name: "Leviosa", price: "Rp 2.500.000", category: "Stylish cafe chair", images: ["/images/ourproduct2.png", "/product2_alt1.png", "/images/ourproduct2_alt2.png"] },
  { id: 3, name: "Lolito", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%", category: "Luxury big sofa", images: ["/images/ourproduct3.png", "/product3_alt1.png", "/product3_alt2.png"] },
  { id: 4, name: "Respira", price: "Rp 500.000", tag: "New", category: "Outdoor bar table and stool", images: ["/images/ourproduct4.png", "/product4_alt1.png", "/product4_alt2.png"] },
  { id: 5, name: "Syltherine", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%", category: "Stylish cafe chair", images: ["/images/ourproduct1.png", "/product1_alt1.png", "/product1_alt2.png"] },
  { id: 6, name: "Leviosa", price: "Rp 2.500.000", category: "Stylish cafe chair", images: ["/images/ourproduct5.png", "/product2_alt1.png", "/product2_alt2.png"] },
  { id: 7, name: "Lolito", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%", category: "Luxury big sofa", images: ["/images/ourproduct3.png", "/product3_alt1.png", "/product3_alt2.png"] },
  { id: 8, name: "Respira", price: "Rp 500.000", tag: "New", category: "Outdoor bar table and stool", images: ["/images/ourproduct4.png", "/product4_alt1.png", "/product4_alt2.png"] },
];

const itemsPerPage = 4;

const ProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImages, setCurrentImages] = useState<Record<number, number>>({});

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleImageClick = (productId: number, totalImages: number) => {
    setCurrentImages((prev) => {
      const nextImageIndex = (prev[productId] || 0) + 1;
      return { ...prev, [productId]: nextImageIndex % totalImages };
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => {
          const currentIndex = currentImages[product.id] || 0;
          return (
            <div key={product.id} className="border rounded-lg overflow-hidden relative shadow-sm">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.tag && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
              <div
                className="cursor-pointer"
                onClick={() => handleImageClick(product.id, product.images.length)}
              >
                <Image
                  src={product.images[currentIndex]}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <div className="mt-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-8 h-8 rounded ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

