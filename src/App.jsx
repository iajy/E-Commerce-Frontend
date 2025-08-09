import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import BestSelling from './Components/BestSelling';
import About from './Components/About';
import Categories from './Components/Categories';
import Feedback from './Components/Feedback';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BestSelling/>
      <About/>
      <Categories/>
      <Feedback/>
    </div>
  );
}

export default App;
