import { useReducer } from "react";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  UPDATE_PRODUCTS,
  //putting in to test
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_MULTIPLE_TO_WISHLIST,
} from "./actions";

export const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistOpen: true,
        wishlist: [...state.wishlist, action.product],
      };

    case REMOVE_FROM_WISHLIST:
      let newwishlistState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        wishlistOpen: newwishlistState.length > 0,
        wishlist: newwishlistState,
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case ADD_MULTIPLE_TO_WISHLIST:
      return {
        ...state,
        cart: [...state.wishlist, ...action.products],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
