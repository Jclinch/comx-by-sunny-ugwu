"use client";

import OrderBook from "@/components/OrderBook";
import { LiveMarket } from "@/components/LiveMarket";
import TradeLog from "@/components/TradeLog";
import End from "@/components/End";
import MiniSidebar from "@/components/MiniSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 w-[80%] md:w-auto">
      {/* Sidebar */}
      <div className="flex w-[20%] h-[352px] mr-[-10px] md:mr-4 mt-[-5px]">
        <MiniSidebar />
      </div>

      {/* Main Content with Vertical Scrolling */}
      <div className="flex flex-col flex-grow mt-[-5px] overflow-y-auto min-h-0">
        <OrderBook />
        <TradeLog />
        <End />
        <LiveMarket />
      </div>
    </div>
  );
};

export default Dashboard;
