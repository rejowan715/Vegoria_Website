import React from "react";

const Button = ({ content }) => {
  return (
    <div>
      <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 py-2 rounded-lg md:text-md text-md hover:scale-105  hover:to-orange-600 transition-all duration-300 cursor-pointer ">{content}</button>
    </div>
  );
};

export default Button;
