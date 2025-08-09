import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import BestSelling from './Components/BestSelling';
import About from './Components/About';
import Categories from './Components/Categories';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BestSelling/>
      <About/>
      <Categories/>
      
    </div>
  );
}

export default App;
