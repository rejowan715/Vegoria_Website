import React from 'react';
import Hero from './Hero.jsx';
import Category from './Category/Category.jsx';
import Values from './Values.jsx';
import Products from './Products.jsx';
import Discount from './Discount.jsx';
import Process from './Process.jsx';
import Testimonials from './Testimonials.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;
