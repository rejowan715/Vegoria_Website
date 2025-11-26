import React from "react";
import Heading from "./Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basketImg from "../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((items) => {
    return (
      <div className="flex flex-row-reverse mt-8 md:mt-0 items-center gap-7" key={items.id}>
        <div>
          <span className="flex bg-gradient-to-b  text-white items-center justify-center text-3xl from-orange-500 to-orange-600 w-14 h-14 rounded-full">{items.icon}</span>
        </div>
        <div className="text-right">
          <h3 className="text-3xl font-bold text-zinc-800">{items.title}</h3>
          <p className="text-zinc-600 mt-3">{items.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((items) => {
    return (
      <div className="flex items-center mt-8 md:mt-0 gap-7" key={items.id}>
        <div>
          <span className="flex bg-gradient-to-b  text-white items-center justify-center text-3xl from-orange-500 to-orange-600 w-14 h-14 rounded-full">{items.icon}</span>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-zinc-800">{items.title}</h3>
          <p className="text-zinc-600 mt-3">{items.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="container mx-auto px-10 py-20">
        <Heading highlight={"Our"} heading={"Values"} />
        <div className="flex md:flex-row flex-col gap-5 mt-14">
          {/* letfvalues  */}
          <div className="flex flex-col justify-between">{leftValues}</div>

          <div className="w-fit md:w-1/2">
            <img src={basketImg} alt="" />
          </div>

          {/* right values  */}
          <div className="flex flex-col justify-between">{rightValues}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: "1",
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: "2",
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: "3",
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: "4",
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
