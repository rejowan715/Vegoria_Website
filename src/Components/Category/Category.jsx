import React from 'react';
import Heading from '../Heading/Heading';
import fruitCard from '../../assets/fruits-and-veggies.png';
import dairyCard from '../../assets/dairy-and-eggs.png';
import seafoodCard from '../../assets/meat-and-seafood.png';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

const Category = () => {
  const renderCards = category.map((cards) => {
    return (
      <div className="flex-1 basis-[300px] mt-20 md:mt-0" key={cards.id}>
        <div className="min-h-[40vh] w-full relative">
          {
            <img
              src={cards.img}
              className="absolute bottom-0 object-cover rounded-t-xl w-full h-full"
              alt="category-img"
            />
          }
        </div>
        <div className="bg-zinc-100 px-8 p-17 -mt-10 rounded-xl text-justify">
          <h3 className="text-3xl text-zinc-800 font-bold">{cards.title}</h3>
          <p className="text-zinc-600 py-4">{cards.description}</p>
          <Link to={cards.path}>
            <Button content="See All" />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="container mx-auto px-10">
      <div className="py-20">
        <Heading highlight="Shop" heading="By Category" />

        {/* foodcards.. */}
        <div className="flex flex-wrap gap-10 md:mt-16">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: '1',
    title: 'Fruits & Veggies',
    description:
      'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    img: fruitCard,
    path: '/fruits',
  },
  {
    id: '2',
    title: 'Dairy & Eggs',
    description:
      'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    img: dairyCard,
    path: '/dairy',
  },
  {
    id: '3',
    title: 'Meat & SeaFood',
    description:
      'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    img: seafoodCard,
    path: '/seafood',
  },
];
