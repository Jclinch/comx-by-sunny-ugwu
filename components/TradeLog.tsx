import React from "react";
import { tradeLogData } from "@/constants/sampleData";

const TradeLog = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4 text-[12px] w-[47%] md:w-auto">
      {/* Header */}
      <div className="mb-4 border-b-2 border-gray-100 p-2">
        <h2 className="font-bold">TRADE LOG</h2>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-max text-left border-collapse ">
          {/* Table Header */}
          <thead>
            <tr className="border-b text-gray-400 text-sm">
              <th className="p-2 whitespace-nowrap">Security</th>
              <th className="p-2 whitespace-nowrap">Board</th>
              <th className="p-2 whitespace-nowrap">Order Type</th>
              <th className="p-2 whitespace-nowrap">Matched Price</th>
              <th className="p-2 whitespace-nowrap">Quantity</th>
              <th className="p-2 whitespace-nowrap">Date</th>
              <th className="p-2 whitespace-nowrap">Time</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tradeLogData.map((trade, index) => (
              <tr key={index} className="border-b text-sm font-semibold text-gray-800">
                <td className="p-2">{trade.security}</td>
                <td className="p-2">{trade.board}</td>
                <td className={`p-2 font-medium ${trade.orderType === "Buy" ? "text-green-600" : "text-red-600"}`}>
                  {trade.orderType}
                </td>
                <td className="p-2">{trade.matchedPrice.toFixed(2)}</td>
                <td className="p-2">{trade.quantity.toLocaleString()}</td>
                <td className="p-2">{trade.date}</td>
                <td className="p-2">{trade.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeLog;
