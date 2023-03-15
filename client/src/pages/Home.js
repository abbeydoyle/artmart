import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";    //// REACH GOAL: This can be for filtering?
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;