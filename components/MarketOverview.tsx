
 const MarketOverview = () => {
    return (
      <div className="p-4 bg-white shadow-md rounded-sm">
        <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 bg-gray-100 rounded-md">
            <p className="text-sm">Soybean (SSBS)</p>
            <p className="font-bold">₦30,834.59</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-md">
            <p className="text-sm">Sorghum (SSGM)</p>
            <p className="font-bold">₦30,834.59</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-md">
            <p className="text-sm">Maize (SMAZ)</p>
            <p className="font-bold">₦30,834.59</p>
          </div>
        </div>
      </div>
    );
  };
  export default MarketOverview;