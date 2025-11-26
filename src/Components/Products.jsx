import React, { useState } from "react";
import Heading from "./Heading/Heading";
import Cards from "./Cards/Cards";
import { Link } from "react-router-dom";
import Productlist from "./ProductList/ProductList.js";
import products from "./ProductList/ProductList.js";
import Button from "./Buttons/Button.jsx";

const Products = () => {
  const tabsCategory = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTabs, setactiveTabs] = useState("All");
  let filterItems = activeTabs === "All" ? Productlist : Productlist.filter((product) => product.category === activeTabs);

  const tabsItems = tabsCategory.map((items) => {
    return (
      <button className={`px-5 py-2 text-lg cursor-pointer rounded-lg ${activeTabs === items ? "bg-gradient-to-b to-orange-400 from-orange-500 text-white" : "bg-zinc-200"}`} onClick={() => setactiveTabs(items)} key={items}>
        {items}
      </button>
    );
  });

  const renderCards = filterItems.slice(0, 8).map((product) => {
    return <Cards name={product.name} price={product.price} image={product.image} key={product.id} />;
  });

  return (
    <section className="container mx-auto px-10 py-20">
      <Heading highlight={"Our"} heading={"Products"} />
      <div className="flex flex-wrap gap-2 justify-center my-10">{tabsItems}</div>
      <div className="grid md:grid-cols-4 text-center gap-4">{renderCards}</div>
      <div className="mt-10 text-center">
        <Link to="/productview">
          <Button content={"View All"} />
        </Link>
      </div>
    </section>
  );
};

export default Products;
