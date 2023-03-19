import "./App.css";
// import logo from "./logo.svg";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/Nav";
// import Footer from './components/footer';
import FooterApp from "./components/footer/index.js";
// import Cart from "./components/Cart/index.js";
// import Pastorders from './pages/pastorder';
// import Profile from './pages/profile';
import Wishlist from './pages/MyWishlist';
import MyAddresses from "./pages/MyAddresses";
// import Checkout from './pages/checkout';
// import Singleart from './pages/singleart';
import Success from "./pages/Success";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <Nav />
          <div className="container flex flex-col justify-center items-center md:ml-[5rem]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/address" element={<MyAddresses />} />
              <Route path="/success" element={<Success />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>

          <FooterApp />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
