import React, { useState } from "react";
import { Search, TrendingUp, Book, Clock, Eye, CheckCircle, XCircle } from "lucide-react";

const menuItems = [
  { name: "Product View", icon: <TrendingUp size={18} />, active: false },
  { name: "Order Book", icon: <Book size={18} />, active: true },
  { name: "Price History", icon: <Clock size={18} />, active: false },
  { name: "Open Orders", icon: <Eye size={18} />, active: false },
  { name: "Closed Trades", icon: <CheckCircle size={18} />, active: false },
  { name: "Cancelled Trades", icon: <XCircle size={18} />, active: false },
];

const MiniSidebar = () => {
  const [activeItem, setActiveItem] = useState("Order Book");

  return (
    <div className="w-48 bg-white shadow-md p-2 rounded-lg">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      {/* Menu Items */}
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer transition-all 
              ${activeItem === item.name ? "bg-gray-100 text-red-500 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveItem(item.name)}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniSidebar;
