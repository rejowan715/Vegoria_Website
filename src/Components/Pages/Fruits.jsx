import React from "react";
import FruitsImg from "../../assets/fruits-banner.jpg";
import CategoryPage from "./CategoryPage";

const Fruits = () => {
  return (
    <div className="text-center">
      <CategoryPage title={"Fruits & Vaggies"} bgImg={FruitsImg} tabsCategory={["Fruits"]} />
    </div>
  );
};

export default Fruits;
