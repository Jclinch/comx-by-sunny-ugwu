import React from "react";
import { tradeLogData } from "@/constants/sampleData";

const TradeLog = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4 text-[12px]">
      <div className="  mb-4 border-b-2 border-gray-100 p-2">
        <h2 className="font-bold">TRADE LOG</h2>
        </div>
      <table className="w-full text-left border-collapse ml-4">
        {/* Table Header */}
        <thead>
          <tr className="border-b text-gray-400 text-sm ">
            <th className="p-2">Security</th>
            <th className="p-2">Board</th>
            <th className="p-2">Order Type</th>
            <th className="p-2">Matched Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {tradeLogData.map((trade, index) => (
            <tr key={index} className="border-b text-sm font-semibold text-gray-800 ">
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
  );
};

export default TradeLog;
