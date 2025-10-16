import React from "react";
import SearchBar from "./SearchBar";
import OnGoingOffer from "./OnGoingOffer";
import MostSellingProducts from "./MostSellingProducts";
import ProductsForU from "./ProductsForU";
import Footer from "./Footer";


const Products = () => {
  return (
    <div className="md:mx-10 py-24 mx-5">
      <SearchBar className="m-3" />
      <OnGoingOffer/>
      <MostSellingProducts/>
      <ProductsForU/>
      
    </div>
  );
};

export default Products;
