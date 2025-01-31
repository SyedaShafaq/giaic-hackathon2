 "use client"; 

import { useSearchStore } from "./searchstore";
  
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const { query, setQuery } = useSearchStore();
  const [localQuery, setLocalQuery] = useState(query);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
    setQuery(e.target.value); // Update Zustand state
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Icon */}
      <Search className="absolute left-4 top-3 text-gray-400" size={20} />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for products..."
        value={localQuery}
        onChange={handleSearch}
        className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:shadow-md"
      />
    </div>
  );
};

export default SearchBar;
