import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import BestSelling from './Components/BestSelling';
import About from './Components/About';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BestSelling/>
      <About/>
      
    </div>
  );
}

export default App;
