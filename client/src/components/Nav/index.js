import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">
              PRINTS
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/mycart">
              MY CART
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/profile">
              PROFILE
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">
              PRINTS
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              LOGIN
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">
              SIGNUP
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */}
          ARTMART
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
      </div>
      
    </header>
  );
}

export default Nav;
