import React from "react";
import { Route,  Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Home";
import MyCart from "./Components/MyCart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
      </Routes>
      <Footer/>
   </div>
  );
};

export default App;
