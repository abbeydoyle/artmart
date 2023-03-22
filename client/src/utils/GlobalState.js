import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  // const refresh = JSON.parse(localStorage.getItem("GlobalCart"));
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    wishlist: [],
    cartOpen: false,

    wishlistOpen: false,
    categories: [],
    currentCategory: "",
  });
  console.log("cart", state.cart);
  if (state.cart.length > 0) {
    localStorage.setItem("GlobalCart", JSON.stringify(state.cart));
  }

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
