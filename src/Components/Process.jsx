import React from 'react';
import { PiFactory, PiPlant } from 'react-icons/pi';
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from 'react-icons/tb';
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';
import Heading from './Heading/Heading';

const Process = () => {
  const renderProcess = steps.map((items) => {
    return (
      <div>
        <div
          className={` flex flex-col justify-center items-center ${items.id % 2 === 0 ? 'md:-mt-50' : ''}`}
        >
          <span className="flex justify-center items-center  w-18 h-18 text-8xl text-white  outline-offset-7 bg-zinc-800 outline-[3px] mt-8 md:mt-0 outline-zinc-800  outline-dashed rounded-full">
            {items.number}
          </span>
          <div className="flex items-center mt-10">
            <span className="flex justify-center text-white rounded-full p-2 text-4xl bg-gradient-to-br to-orange-400 from-orange-500">
              {items.icon}
            </span>
            <div className="ml-5">
              <h4 className="text-2xl text-zinc-800 font-bold">{items.title}</h4>
              <p className="text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="container mx-auto px-10 my-10 mb-30">
      <div className="w-fit pt-[5%]  mr-auto">
        <Heading highlight={'Our'} heading={'Process'} />
      </div>
      <div className="flex flex-wrap md:flex-nowrap pt-[25%]">{renderProcess}</div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />,
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />,
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SlBadge />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />,
  },
];
