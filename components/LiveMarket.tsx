// import { useEffect, useState } from "react";

export const LiveMarket = () => {
  const marketData = [
    { name: "Soybean (SSBS)", price: "₦30,834.59" },
    { name: "Sorghum (SSGM)", price: "₦30,834.59" },
    { name: "Maize (SMAZ)", price: "₦30,834.59" },
    { name: "Paddy Rice (SPRL)", price: "₦30,834.59" },
    { name: "Cocoa (SCOC)", price: "₦30,834.59" },
    { name: "Soybean (SSBS)", price: "₦30,834.59" },
  ];

  // Duplicate the array to make the scrolling seamless
  const scrollingData = [...marketData, ...marketData];

  return (
    <div className="fixed bottom-0 left-0 bg-white text-black flex items-center overflow-hidden md:h-[51px] border border-gray-200 w-full">
      {/* Live Market Label */}
      <div className="font-bold bg-black text-white flex items-center justify-center text-[18px] h-full md:w-[164px]">
        Live Market
      </div>

      {/* Scrolling Text Container */}
      <div className="w-full overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          {scrollingData.map((item, index) => (
            <div key={index} className="whitespace-nowrap ml-2">
              <span className="mr-2">{item.name}</span>
              <span className="font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
