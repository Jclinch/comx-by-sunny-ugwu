

import React from "react";
import { productList } from "@/constants/sampleData";

interface ProductListProps {
  type: "buy" | "sell";
  filter: string;
}

const ProductList: React.FC<ProductListProps> = ({ type, filter }) => {
  const filteredProducts = filter === "All"
    ? productList
    : productList.filter((product) => product.name.includes(filter));

  return (
    <div className="w-[47%] md:w-1/2 bg-white shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="hidden md:grid grid-cols-4 gap-4 border-b pb-2 text-gray-400 text-sm font-semibold">
        <span className="ml-4">Products</span>
        <span className="ml-8">Quantity</span>
        <span className="ml-11">{type === "buy" ? "Bid Price" : "Offer Price"}</span>
        <span className="text-right"></span>
      </div>

      {/* Mobile Header (Stacked Prices) */}
      <div className="md:hidden grid grid-cols-2 gap-1 border-b pb-2 text-gray-400 text-xs font-semibold">
        <span>Product</span>
        <span className="text-right">Details</span>
      </div>

      {/* List */}
      <div className="mt-2">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border-b py-2 text-sm text-[14px]">

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-4 gap-4 items-center">
              <span className="ml-4">{product.name}</span>
              <span className="text-gray-700 flex mr-8 justify-end text-right">{product.quantity}</span>
              <span className={`text-center font-bold ${type === "buy" ? "text-green-600 ml-10" : "text-red-600 ml-10"}`}>
                {product.price.toFixed(2)}
              </span>
              <button className={`px-3 py-1 rounded border text-sm w-fit justify-self-end ${
                type === "buy" ? "border-green-600 text-green-600" : "border-red-600 text-red-600"
              }`}>
                {type === "buy" ? "Buy" : "Sell"}
              </button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden grid grid-cols-2 gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">{product.name}</span>
                <span className="text-gray-500 text-xs">Qty: {product.quantity}</span>
              </div>

              <div className="flex flex-col items-end">
                <span className={`font-bold ${type === "buy" ? "text-green-600" : "text-red-600"}`}>
                  {product.price.toFixed(2)}
                </span>
                <button className={`mt-1 px-3 py-1 rounded border text-xs ${
                  type === "buy" ? "border-green-600 text-green-600" : "border-red-600 text-red-600"
                }`}>
                  {type === "buy" ? "Buy" : "Sell"}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
