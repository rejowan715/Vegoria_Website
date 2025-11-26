import React from "react";
import CategoryPage from "./CategoryPage";
import ProductImg from "../../assets/all-banner.jpg";

const ProductView = () => {
  return (
    <div>
      <CategoryPage title={"All Products"} bgImg={ProductImg} tabsCategory={["All"]} />
    </div>
  );
};

export default ProductView;
