"use client";

import OrderBook from "@/components/OrderBook";
import { LiveMarket } from "@/components/LiveMarket";
import TradeLog from "@/components/TradeLog";
import End from "@/components/End";
import MiniSidebar from "@/components/MiniSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 w-[47%] md:w-auto">
      <div className="flex w-[20%] h-[352px] mr-[-10px] md:mr-4 mt-[-5px]">
        <MiniSidebar />
      </div>
      <div className="flex flex-col flex-grow mt-[-5px]">
        <OrderBook />
        <TradeLog />
        <End />
        <LiveMarket />
      </div>
    </div>
  );
};

export default Dashboard;
