import React, { useState, useEffect } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "s") {
      event.preventDefault();
      console.log("Search triggered:", searchQuery);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchQuery]);

  return (
    <div className="relative flex-1 max-w-md mx-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Quick Search..."
        className="w-full p-2 pl-12 pr-10 border rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500">
        <MdKeyboardCommandKey className="mr-1" />
        <span>S</span>
      </div>
    </div>
  );
};
