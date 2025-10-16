import React from "react";
import SearchBar from "./SearchBar";
import OnGoingOffer from "./OnGoingOffer";
import MostSellingProducts from "./MostSellingProducts";

const Products = () => {
  return (
    <div className="md:mx-30 py-24 mx-5">
      <SearchBar className="m-3" />
      <OnGoingOffer/>
      <MostSellingProducts/>
    </div>
  );
};

export default Products;
