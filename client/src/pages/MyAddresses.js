// import React, {useEffect, useState} from "react";
// //import { Link } from "react-router-dom";
// import { useLazyQuery } from "@apollo/client";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // TODO: import CSS ???
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
// import { ADD_ADDRESS } from "../utils/mutations";
// import { Card, Button } from "flowbite-react";
// import { useStoreContext } from "../utils/GlobalState";

// const Address = () => {
// const [state, dispatch] = useStoreContext();
// // const [getAddress, { data }] = useLazyQuery(QUERY_ADDRESS)

// useEffect(() => {
//   async function getAddress() {
//     const cart = await idbPromise("cart", "get");
//     dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//   }
//   if (!state.cart.length) {
//     getCart();
//   }
// }, [state.cart.length, dispatch]);

// }

// // function MyAddresses() {
// //   // display current ADDRESS

// //   function displayAddress(){
// //     if(!state.)

//   return (
//     <>
//       {/* // if no address on file: Button on card that says "Add an Address" // if
//       address exists: show address with cta button for editing or deleting. */}

//       <Card>
//         <Button>Add Address</Button>
//       </Card>

//       <Card>
//         <h5> Address:</h5>
//         <Button>
//           Edit Address
//           <svg
//             className="ml-2 -mr-1 h-4 w-4"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </Button>
//         <Button>
//           Delete Address
//           <svg
//             className="ml-2 -mr-1 h-4 w-4"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </Button>
//       </Card>
//     </>
//   );
// }

// export default MyAddresses;
