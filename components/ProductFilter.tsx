import React, { useState } from "react";

const boardOptions = ["X-Traded", "OTC", "FI", "Derivatives"];
const productOptions = ["All", "SMAZ", "SSBS", "SPRL", "SGNG", "SSGM", "FETC", "SDOC"];

interface ProductFilterProps {
  onFilter: (initial: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const [selectedBoard, setSelectedBoard] = useState("X-Traded");
  const [selectedProduct, setSelectedProduct] = useState("All");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Board Selection */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-gray-600 text-sm font-semibold">Board</span>
        {boardOptions.map((board) => (
          <button
            key={board}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedBoard === board ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedBoard(board)}
          >
            {board}
          </button>
        ))}
      </div>

      {/* Product Selection */}
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-gray-600 text-sm font-semibold">Product</span>
        {productOptions.map((product) => (
          <button
            key={product}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedProduct === product ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => {
              setSelectedProduct(product);
              onFilter(product);
            }}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
