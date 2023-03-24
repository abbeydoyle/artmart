// imports and dependencies
import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/Nav";
import FooterApp from "./components/footer/index.js";
import Cart from "./components/Cart";
import Profile from "./pages/MyProfile";
import Wishlist from "./pages/MyWishlist";
import Detail from "./pages/SingleArtDetail";
import Success from "./pages/Success";

// db link
const httpLink = createHttpLink({
  uri: "/graphql",
});

// token session
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// apollo connection
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// main app routers
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <StoreProvider>
            <Nav />
            <div className="container flex flex-col justify-center items-center md:ml-[5rem]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/products/:id" element={<Detail />} />
              </Routes>
            </div>
            <FooterApp />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
