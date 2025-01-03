import React from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";

const FilterBar: React.FC = () => {
  return (
    <div className="bg-beige py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Left Side - Filter and Layout Toggle */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
            <FiFilter className="text-xl" />
            <span className="font-medium">Filter</span>
          </button>

          <div className="flex items-center space-x-2">
            <button className="p-2 border rounded hover:bg-gray-200">
              <FiGrid className="text-xl" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-200">
              <FiList className="text-xl" />
            </button>
          </div>
        </div>

        {/* Center - Results Text */}
        <div className="text-gray-600 text-sm">
          Showing <span className="font-medium">1–16</span> of <span className="font-medium">32</span> results
        </div>

        {/* Right Side - Show and Sort Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Show</span>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-200">16</button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Short by</span>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-200">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
