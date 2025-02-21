// path: constants/sampleData.ts

export const sampleData = {
    user: {
      name: "Demo User",
      cashBalance: 8374763,
      securitiesValue: 8374763,
      loanBalance: 7542246,
    },
    market: {
      boardOptions: ["X-Traded", "OTC", "FI", "Derivatives"],
      productCategories: ["All", "SMAZ", "SBBS", "SPRL", "SGNG", "SSGM", "FETC", "SCOC"],
      products: [
        { name: "Soybeans (SSBS)", quantity: 2003, bidPrice: 1736.92, offerPrice: 1736.92 },
        { name: "Paddy Rice (SPRL)", quantity: 11293, bidPrice: 3627.00, offerPrice: 3627.00 },
        { name: "Maize (SMAZ)", quantity: 1832, bidPrice: 8294.01, offerPrice: 8294.01 },
        { name: "Sorghum (SSGM)", quantity: 29102, bidPrice: 8192.00, offerPrice: 8192.00 },
        { name: "Fair Trade ETC (FETC)", quantity: 3212, bidPrice: 1736.92, offerPrice: 1736.92 },
      ],
      tradeLog: [
        { security: "Soybeans (SSBS)", board: "X-Traded", orderType: "Buy", matchedPrice: 1792.65, quantity: 9265, date: "17 Oct, 2020", time: "07:38" },
        { security: "Paddy Rice (SPRL)", board: "X-Traded", orderType: "Buy", matchedPrice: 1792.65, quantity: 9265, date: "8 Sep, 2020", time: "02:02" },
        { security: "Maize (SMAZ)", board: "OTC", orderType: "Sell", matchedPrice: 1792.65, quantity: 9265, date: "24 May, 2020", time: "06:42" },
        { security: "Sorghum (SSGM)", board: "FI", orderType: "Sell", matchedPrice: 1792.65, quantity: 9265, date: "1 Feb, 2020", time: "01:09" },
      ],
      liveMarket: [
        { name: "Soybean (SSBS)", price: 30834.59 },
        { name: "Sorghum (SSGM)", price: 30834.59 },
        { name: "Maize (SMAZ)", price: 30834.59 },
        { name: "Paddy Rice (SPRL)", price: 30834.59 },
        { name: "Cocoa (SCOC)", price: 30834.59 },
      ],
    },
  };
  

export const productList = [
  { name: "Soybeans (SSBS)", quantity: 2003, price: 1736.92 },
  { name: "Paddy Rice (SPRL)", quantity: 11293, price: 3627.00 },
  { name: "Maize (SMAZ)", quantity: 1832, price: 8294.01 },
  { name: "Sorghum (SSGM)", quantity: 29102, price: 8192.00 },
  { name: "Fair Trade ETC (FETC)", quantity: 3212, price: 1736.92 },
  { name: "Fair Trade ETC (FETC)", quantity: 3212, price: 1736.92 },
];


export const tradeLogData = [
  {
    security: "Soybeans (SSBS)",
    board: "X-Traded",
    orderType: "Buy",
    matchedPrice: 1792.65,
    quantity: 9265,
    date: "17 Oct, 2020",
    time: "07:38",
  },
  {
    security: "Paddy Rice (SPRL)",
    board: "X-Traded",
    orderType: "Buy",
    matchedPrice: 1792.65,
    quantity: 9265,
    date: "8 Sep, 2020",
    time: "02:02",
  },
  {
    security: "Maize (SMAZ)",
    board: "OTC",
    orderType: "Sell",
    matchedPrice: 1792.65,
    quantity: 9265,
    date: "24 May, 2020",
    time: "06:42",
  },
  {
    security: "Sorghum (SSGM)",
    board: "FI",
    orderType: "Sell",
    matchedPrice: 1792.65,
    quantity: 9265,
    date: "1 Feb, 2020",
    time: "01:09",
  },
];
