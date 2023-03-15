import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function navbar() {

  function navigationheader() {
    if (Auth.loggedIn()) {
      return (
        <ul className="">
          <li className="">
            <Link to="/pastorder">
             Past Order
            </Link>
          </li>
          <li className="">
            
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="">
          <li className="">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="">
      <h1>
        <Link to="/">
          ArtMart!
        </Link>
      </h1>

      <nav>
        {navigationheader()}
      </nav>
    </header>
  );
}
  
  export default navbar;