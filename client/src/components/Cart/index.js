import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
//useLazyQuery function returns a promise that fulfills with a query result when the query succeeds or fails.
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

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
  const value = localStorage.getItem(20);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += value * item.purchaseQuantity;
    });
    const total = sum;
    localStorage.setItem(sum, total);
    console.log(total);
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];
    console.log("asdfg");
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
      console.log("product", productIds);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    // <div className="cart">
    //   <h2>Shopping Cart</h2>
    //   {state.cart.length ? (
    //     <div>
    //       {state.cart.map((item) => (
    //         <CartItem key={item._id} item={item} />
    //       ))}

    //       <div className="flex-row space-between">
    //         <strong>Total: ${calculateTotal()}</strong>

    //         {Auth.loggedIn() ? (
    //           <button onClick={submitCheckout}>Checkout</button>
    //         ) : (
    //           <span>(log in to check out)</span>
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>You haven't added anything to your cart yet!</h3>
    //   )}
    // </div>
    <>
      <h2 className="text-3xl font-bold underline text-[#36392c] pb-5">
        Shopping Cart
      </h2>
      <div className="flex-row justify-between">
        <strong className="ml-3 mr-3">Total: ${calculateTotal()}</strong>
        {Auth.loggedIn() && state.cart.length ? (
          <button
            onClick={submitCheckout}
            className="hover:underline ml-3 mr-3"
          >
            Checkout
          </button>
        ) : (
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
        <div className="gap-8 md:columns-2 m-5 whitespace-nowrap">
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
