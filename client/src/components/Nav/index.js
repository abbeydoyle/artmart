// imports and dependencies
import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Navbar } from "flowbite-react";
import LogoutModal from "../../pages/logout";
import Signup from "../../pages/signup";
import Login from "../../pages/login";

function Nav() {
  // modal use states
  const [showLogoutModal, setshowLogoutModal] = useState(false);
  const [showSignupModal, setshowSignupModal] = useState(false);
  const [showLoginModal, setshowLoginModal] = useState(false);

  // switch from signup modal to login modal
  function loginToggle() {
    if (showSignupModal) {
      setshowSignupModal(false);
      setshowLoginModal(true);
    } else {
      return
    }
  }

  // switch from login modal to signup modal
  function signupToggle() {
    if (showLoginModal) {
      setshowSignupModal(true);
      setshowLoginModal(false);
    } else {
      return
    }
  }


  function showNavigation() {
    // navbar if user is logged in
    if (Auth.loggedIn()) {
      return (
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand
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
            <Navbar.Link href="/">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Prints
              </span>
            </Navbar.Link>
            <Navbar.Link href="/profile">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Profile
              </span>
            </Navbar.Link>
            <Navbar.Link href="/wishlist">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Wishlist
              </span>
            </Navbar.Link>
            <Navbar.Link href="/cart">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                My Cart
              </span>
            </Navbar.Link>
            <Navbar.Link
              onClick={() => {
                setshowLogoutModal(true);
              }}
            >
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Logout
              </span>
            </Navbar.Link>
          </Navbar.Collapse>
          {showLogoutModal && <LogoutModal setOpenLogoutModal={setshowLogoutModal} />}
        </Navbar>
      );
      // logged out navbar
    } else {
      return (
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand
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
            <Navbar.Link href="/">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Prints
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                setshowLoginModal(true);
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Log in
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                setshowSignupModal(true);
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Sign up
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                setshowLoginModal(true);
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                My Cart
              </span>
            </Navbar.Link>
          </Navbar.Collapse>
          {/* modal use state calls */}
          {showSignupModal && <Signup setOpenSignupModal={setshowSignupModal} loginToggle={loginToggle} showSignupModal={showSignupModal} setOpenLoginModal={setshowLoginModal}/>}
          {showLoginModal && <Login setOpenLoginModal={setshowLoginModal} signupToggle={signupToggle} showLoginModal={showLoginModal} setOpenSignupModal={setshowSignupModal}/>}
        </Navbar>
      );
    }
  }
  return <header>{showNavigation()}</header>;
}

export default Nav;
