import React from 'react';
import Grocery from '../assets/Grocery.png';
import Button from './Buttons/Button.jsx';
const Hero = () => {
  return (
    <div>
      <section>
        <div className="container min-h-screen mx-auto px-10 flex md:flex-row flex-col justify-center items-center bg-white md:mt-10 mt-28">
          <div className="flex-1">
            <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
              Export Best Quality..
            </span>
            <h1 className="md:text-5xl/18 text-4xl/12 font-bold mt-4">
              <span className="text-orange-500">Fresh</span> &{' '}
              <span className="text-orange-500">Organic</span> Produce Made Easy in Your City
            </h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-8">
              Bred for a high content of beneficial substances. Our products are all fresh and
              healthy.
            </p>
            <Button content="Shop Now" />
          </div>
          <div className="flex-1">
            <img src={Grocery} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
