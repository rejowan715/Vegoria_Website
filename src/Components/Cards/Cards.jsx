import React from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import Button from '../Buttons/Button.jsx';

const Cards = ({ name, price, image }) => {
  return (
    <div className="bg-zinc-200 p-4 rounded-lg">
      <div className="flex justify-between">
        <span className="text-2xl text-zinc-500">
          <FaHeart />
        </span>
        <span className="text-md p-2 text-white bg-orange-400 rounded-lg">
          <FaPlus />
        </span>
      </div>
      <div className="w-full h-50">
        <img src={image} className="w-full h-full mx-auto object-scale-down " alt="" />
      </div>
      <div>
        <h3 className="text-xl text-zinc-900 font-semibold">{name}</h3>
        <p className="py-2 font-bold">${price.toFixed(2)}</p>
        <Button content={'Shop Now'} />
      </div>
    </div>
  );
};

export default Cards;
