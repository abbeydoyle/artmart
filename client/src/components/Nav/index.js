import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand
            // as={{
            //   $$typeof: Symbol(react.forward_ref),
            //   render: LinkWithRef
            // }}
            to="/"
          >
            <img
              src="https://res.cloudinary.com/duxmtidm1/image/upload/v1679071985/png-transparent-frame-ornate-gold-picture-ornate-frame-elegance-removebg-preview_vjducd.png"
              className="mr-3 h-6 sm:h-9"
              alt="ArtMart Logo"
            />
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-[#508192]">
              ArtMart
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
            href="/">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Prints</span>
            </Navbar.Link>
            <Navbar.Link href="/login">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Profile</span>
              </Navbar.Link>
              {/* TODO: wishlist */}
            <Navbar.Link href="/mywishlist">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Wishlist</span>
            </Navbar.Link>
            <Navbar.Link href="/mycart">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">My Cart</span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand
            // as={{
            //   $$typeof: Symbol(react.forward_ref),
            //   render: LinkWithRef
            // }}
            to="/"
          >
            <img
              src="https://res.cloudinary.com/duxmtidm1/image/upload/v1679071985/png-transparent-frame-ornate-gold-picture-ornate-frame-elegance-removebg-preview_vjducd.png"
              className="mr-3 h-6 sm:h-9"
              alt="ArtMart Logo"
            />
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-[#508192]">
              ArtMart
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
            href="/">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Prints</span>
            </Navbar.Link>
            <Navbar.Link href="/login">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Log in</span>
              </Navbar.Link>
            <Navbar.Link href="/signup">
              <span className = "block py-2 pl-3 pr-4 md:text-lg text-white bg-[#508192] rounded md:bg-transparent md:text-[#508192] md:p-0">Sign up</span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }

  return <header>{showNavigation()}</header>;
}

export default Nav;
