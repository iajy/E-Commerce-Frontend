import React, { useEffect } from "react";
import OnGoingOffer from "./OnGoingOffer";
import MostSellingProducts from "./MostSellingProducts";
import ProductsForU from "./ProductsForU";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

const Products = () => {

  
  const location = useLocation();

  useEffect(()=>{
    if(location.hash){
      const element = document.querySelector(location.hash);
      if(element){
        element.scrollIntoView({behavior:"smooth"})
      }
    }
  },[location]);
  
  return (
    <>
      <div className="flex flex-col py-26 mx-5">
        <SearchBar />
        <OnGoingOffer />
        {/* <MostSellingProducts /> */}
      </div>
      <ProductsForU id={"productview"}/>
    </>
  );
};

export default Products;
