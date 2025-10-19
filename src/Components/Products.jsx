import React from "react";
import OnGoingOffer from "./OnGoingOffer";
import MostSellingProducts from "./MostSellingProducts";
import ProductsForU from "./ProductsForU";
import SearchBar from "./SearchBar";

const Products = () => {
  return (
    <>
      <div className="flex flex-col py-26 mx-5">
        <SearchBar />
        <OnGoingOffer />
        <MostSellingProducts />
      </div>
      <ProductsForU/>
    </>
  );
};

export default Products;
