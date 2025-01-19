import React, { useState } from "react";

const AddProduct = ({ products, setProducts }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = () => {
        if (!name || !price) {
            alert("Please enter product name and price");
            return;
        }

        if (products.find((product) => product.name === name)) {
            alert("Product already exists");
            return;
        }

        setProducts([...products, { name, price }]);
        setName("");
        setPrice("");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add Product</h3>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
                onClick={handleAddProduct}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Add
            </button>
        </div>
    );
};

export default AddProduct;
