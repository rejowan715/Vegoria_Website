import React from "react";
import CategoryPage from "./CategoryPage";
import MeatImg from "../../assets/seafood-banner.jpg";

const Seafood = () => {
  return (
    <div>
      <CategoryPage title={"Meats & Seafoods"} bgImg={MeatImg} tabsCategory={["SeaFood"]} />
    </div>
  );
};

export default Seafood;
