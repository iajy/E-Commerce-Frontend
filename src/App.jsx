import React from "react";
import {HashRouter as Route,  Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Home";
import MyCart from "./Components/MyCart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="products" element={<Products/>}/>
      </Routes>
   </div>
  );
};

export default App;
