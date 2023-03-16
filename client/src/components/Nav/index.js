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
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */}
          ARTMART
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
