"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional-info", label: "Additional Information" },
    { id: "reviews", label: "Reviews (5)" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b pb-2 text-lg font-medium text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative pb-3 ${
              activeTab === tab.id ? "text-black font-semibold" : "hover:text-black"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700">
        {activeTab === "description" && (
          <p className="text-lg leading-relaxed">
            Embodying the raw, wayward spirit of rock ‘n’ roll, this sofa set takes an unmistakable look with
            premium craftsmanship. Crafted for elegance and modern comfort.
          </p>
        )}
        {activeTab === "additional-info" && (
          <p className="text-lg leading-relaxed">
            <strong>Material:</strong> Premium Wood & Fabric | <strong>Weight:</strong> 45kg | 
            <strong> Dimensions:</strong> 300cm x 100cm
          </p>
        )}
        {activeTab === "reviews" && (
          <p className="text-lg leading-relaxed">⭐⭐⭐⭐⭐ 4.8/5 from 5 Reviews</p>
        )}
      </div>

      {/* Product Images */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg flex justify-center shadow-md">
          <Image src="/images/singleproductsofa1.png " alt="Product Image 1" width={500} height={300} className="rounded-md" />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg flex justify-center shadow-md">
          <Image src="/images/singleproductsofa2.png" alt="Product Image 2" width={500} height={300} className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
