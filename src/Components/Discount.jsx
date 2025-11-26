import React from "react";
import Button from "./Buttons/Button";
import freshFood from "../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section className="py-6 px-8 md:px-0 bg-zinc-200 md:flex  bg-contain bg-no-repeat bg-right  md:bg-[url(./assets/fresh-fruits.png)]">
      <div className="self-center">
        <h1 className="text-6xl md:text-9xl text-orange-500 transform md:-rotate-90 font-bold">20%</h1>
      </div>
      <div className="max-w-[700px]">
        <h2 className="text-zinc-800 text-6xl md:text-7xl font-bold py-4">First Order Discount!</h2>
        <p className="text-zinc-600 mb-5 ">Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchas.Fast delivery and quality guaranteed.</p>
        <Button content={"Get a Discount"} />
      </div>
    </section>
  );
};

export default Discount;
