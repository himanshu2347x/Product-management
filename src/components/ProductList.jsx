import React, { useState } from "react";

const ProductList = ({ products, setProducts}) => {

    if (products.length === 0) {
        return <p>No Product Found</p>;
    }

    const handleDelete = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Product List</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-left p-2 border-b border-gray-300">Name</th>
                        <th className="text-left p-2 border-b border-gray-300">Price</th>
                        <th className="text-center p-2 border-b border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="p-2 border-b border-gray-300">{product.name}</td>
                            <td className="p-2 border-b border-gray-300">${product.price}</td>
                            <td className="text-center p-2 border-b border-gray-300">
                                <button
                                    className="bg-red-500 text-white rounded px-3 py-1 cursor-pointer"
                                    onClick={() => handleDelete(index)}
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
