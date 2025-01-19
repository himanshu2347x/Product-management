import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userAuthToken");
    if (!token) {
      navigate("/login");
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userAuthToken");
    navigate("/login");
  };

  const filteredProducts = products.filter(
    (product) =>
      product?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Home Page</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
        <AddProductForm products={products} setProducts={setProducts} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {products.length === 0 ? (
          <p className="text-center text-gray-600 my-4">
            No products available. Add some products to get started!
          </p>
        ) : (
            <ProductList products={filteredProducts} setProducts={ setProducts}  />
        )}
      </div>
    </div>
  );
};

export default Home;
