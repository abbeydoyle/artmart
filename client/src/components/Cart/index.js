// imports and dependencies
// useLazyQuery function returns a promise that fulfills with a query result when the query succeeds or fails.
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
const chalk = require('chalk');

// stripe public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // stripe payment conditional redirection
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // inital cart retrieval/display
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  // current hardcoded stripe workaround
  // to see current stripe progress view "pricerabbey" branch - only lacks price translation from app to stripe platform
  const value = localStorage.getItem(20);

  // cart total
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += value * item.purchaseQuantity;
    });
    const total = sum;
    localStorage.setItem(sum, total);
    console.log(chalk.bgHex('#508192').white(total));
    return sum.toFixed(2);
  }

  // onclick function
  function submitCheckout() {
    const productIds = [];
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
      console.log(chalk.bgHex('#508192').white(("product", productIds)));
    });

    // lazy query checkout
    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <>
      <h2 className="text-3xl font-bold underline text-[#36392c] pb-5">
        Shopping Cart
      </h2>
      <div className="flex-row justify-between">
        <strong className="ml-3 mr-3">Total: ${calculateTotal()}</strong>
        {/* if user is logged in with items in cart */}
        {Auth.loggedIn() && state.cart.length ? (
          <button
            onClick={submitCheckout}
            className="hover:underline ml-3 mr-3 hover:text-[#508192]"
          >
            Checkout
          </button>
        ) : // if user is logged in but no items in cart
        Auth.loggedIn() && !state.cart.length ? (
          <span className="ml-3">Add items to your cart to checkout</span>
        ) : (
          // user is not logged in
          <span className="ml-3">
            Log in{" "}
            <a href="/login" className="underline hover:text-[#508192]">
              here
            </a>{" "}
            to checkout
          </span>
        )}
      </div>
      <main className="whitespace-nowrap text-[#36392c]">
        <div className="gap-8 md:columns-2 m-5">
          {state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <>
              <h3 className="font-bold text-lg ">
                You haven't added anything to your cart yet!{" "}
              </h3>
              <h3 className="font-bold text-lg ">
                Start browsing prints{" "}
                <a href="/" className="underline hover:text-[#508192]">
                  here
                </a>
                .
              </h3>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
