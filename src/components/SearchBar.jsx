import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="flex flex-col items-center p-4">
            <h3 className="text-lg font-semibold mb-2">Search Products</h3>
            <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full max-w-md"
                placeholder="Search by product name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
