import React from "react";

const Heading = ({ highlight, heading }) => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 md:text-4xl text-3xl font-bold">
        <span className="text-orange-400">{highlight}</span> {heading}
      </h2>
      <div className="bg-orange-500 w-30 md:mt-5 mt-3 h-1 ml-auto"></div>
    </div>
  );
};

export default Heading;
