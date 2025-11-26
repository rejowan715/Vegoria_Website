import React from "react";
import CategoryPage from "./CategoryPage";
import DairyImg from "../../assets/dairy-banner.jpg";

const Dairy = () => {
  return (
    <div>
      <CategoryPage title={"Dairy & Eggs"} bgImg={DairyImg} tabsCategory={["Dairy"]} />
    </div>
  );
};

export default Dairy;
