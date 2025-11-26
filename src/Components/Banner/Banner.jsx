import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <div className="mt-25 h-[50vh] flex justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="text-5xl bg-white p-5 font-bold rounded-lg z-10">{title}</h2>
      <div className="bg-black/50  inset-0 absolute"></div>
    </div>
  );
};

export default Banner;
