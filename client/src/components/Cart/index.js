import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
//useLazyQuery function returns a promise that fulfills with a query result when the query succeeds or fails.
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import {
  TOGGLE_CART,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
} from "../../utils/actions";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const cart = JSON.parse(localStorage.getItem("GlobalCart"));

  console.log("cart feetch", cart);
  for (let i = 0; i < cart.length; i++) {
    dispatch({
      type: ADD_TO_CART,
      product: { ...cart[i] },
    });
    idbPromise("cart", "put", {
      ...cart[i],
      // purchaseQuantity: purchaseQuantity,
    });
  }
};

//   const [state, dispatch] = useStoreContext();
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
//   console.log("state of cart?? ", state);

//   useEffect(() => {
//     if (data) {
//       stripePromise.then((res) => {
//         res.redirectToCheckout({ sessionId: data.checkout.session });
//       });
//     }
//   }, [data]);

//   function fetchItems() {
//     console.log("FINAL CART", cart);
//     for (let i = 0; i < cart.length; i++) {
//       console.log("items??!!", cart[i]);
//       const data = cart[i];
//       return <CartItem key={data.key} item={data} />;
//     }
//   }

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }
//   // const value = localStorage.getItem("20");
//   const value = JSON.parse(localStorage.getItem("sizeChoice"));
//   // console.log(value);
//   const price = value.price;
//   // console.log(price);
//   // const size = value.size;
//   // console.log(size);

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((item) => {
//       sum += price * item.purchaseQuantity;
//     });
//     const total = sum;
//     localStorage.setItem(sum, total);
//     console.log(total);
//     return sum.toFixed(2);
//   }

//   function submitCheckout() {
//     const productIds = [];
//     console.log("asdfg");
//     state.cart.forEach((item) => {
//       for (let i = 0; i < item.purchaseQuantity; i++) {
//         productIds.push(item._id);
//       }
//       console.log("product", productIds);
//     });

//     getCheckout({
//       variables: { products: productIds },
//     });
//   }

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {/* {fetchItems()} */}
//       {/* <CartItem key={data.key} item={data} />; */}
//       <div className="flex-row space-between">
//         <strong>Total: ${calculateTotal()}</strong>

//         {Auth.loggedIn() ? (
//           <button onClick={submitCheckout}>Checkout</button>
//         ) : (
//           <span>(log in to check out)</span>
//         )}
//       </div>

//       <main className="whitespace-nowrap text-[#36392c]">
//         <div className="gap-8 md:columns-2 m-5 whitespace-nowrap">
//           {newCart.length ? (
//             <div>
//               {newCart.map((item) => (
//                 <CartItem key={item.key} item={item} />
//               ))}
//             </div>
//           ) : (
//             <>
//               <h3 className="font-bold text-lg ">
//                 You haven't added anything to your cart yet!{" "}
//               </h3>
//               <h3 className="font-bold text-lg ">
//                 Start browsing prints{" "}
//                 <a href="/" className="underline hover:text-[#508192]">
//                   here
//                 </a>
//                 .
//               </h3>
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };
export default Cart;
