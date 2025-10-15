import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import BestSelling from "./BestSelling";
import About from "./About";
import Categories from "./Categories";
import Feedback from "./Feedback";
import Footer from "./Footer";
import { Route, Router, Routes } from "react-router-dom";
import MyCart from "./MyCart";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <Hero />
      <BestSelling />
      <About />
      <Categories />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
