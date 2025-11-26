import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList.js";
import Cards from "./../Cards/Cards";

const CategoryPage = ({ title, bgImg, tabsCategory = [] }) => {
  const filterItems = tabsCategory.includes("All") ? ProductList : ProductList.filter((items) => tabsCategory.includes(items.category));

  const renderCards = filterItems.map((product) => {
    return <Cards name={product.name} price={product.price} image={product.image} />;
  });

  return (
    <div>
      <Banner title={title} bgImage={bgImg} />
      <div className="container p-10 mx-auto grid md:grid-cols-4 text-center gap-4">{renderCards}</div>
    </div>
  );
};

export default CategoryPage;
