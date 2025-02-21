// //path : components/OrderBook.tsx
// import React from "react";
// import ProductList from "./ProductList";

// const OrderBook = () => {
//   return (
//     <div className="flex flex-col md:flex-row gap-2 py-2 bg-gray-100">
//       <ProductList type="buy" />
//       <ProductList type="sell" />
//     </div>
//   );
// };

// export default OrderBook;




import React, { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const OrderBook = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className=" bg-gray-100 mt-14 md:mt-0">
      <ProductFilter onFilter={setFilter} />
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <ProductList type="buy" filter={filter} />
        <ProductList type="sell" filter={filter} />
      </div>
    </div>
  );
};

export default OrderBook;
