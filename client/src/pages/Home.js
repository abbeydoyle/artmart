import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";    //// REACH GOAL: This can be for filtering?
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <div>Home comp</div>
      <ProductList />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;