import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaTrophy className="text-black text-4xl" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <FaShieldAlt className="text-black text-4xl" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <FaShippingFast className="text-black text-4xl" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHeadset className="text-black text-4xl" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-beige py-10 relative top-[100px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left md:flex-row space-y-2 md:space-y-0 md:space-x-4"
          >
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <h4 className="text-lg font-bold">{feature.title}</h4>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

 
  