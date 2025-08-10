import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import BestSelling from "./Components/BestSelling";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <BestSelling />
      <About />
      <Categories />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
