// import React from "react";
// import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";

// function ProductItem(item, id) {
//   const [state, dispatch] = useStoreContext();

//   const {
//     image,
//     name, // title,
//     artistName, // artist
//     _id,
//     // price,
//     // quantity
//   } = item;

//   const { cart } = state;

//   //TODO: we probably don't need addToCart here because you won't be able to add to cart straight from homepage without going to the artwork?
//   // const addToCart = () => {
//   //   const itemInCart = cart.find((cartItem) => cartItem._id === _id)
//   //   if (itemInCart) {
//   //     dispatch({
//   //       type: UPDATE_CART_QUANTITY,
//   //       _id: _id,
//   //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//   //     });
//   //     idbPromise('cart', 'put', {
//   //       ...itemInCart,
//   //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//   //     });
//   //   } else {
//   //     dispatch({
//   //       type: ADD_TO_CART,
//   //       product: { ...item, purchaseQuantity: 1 }
//   //     });
//   //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
//   //   }
//   // }

//   return (
//     // <div className="">
//     //   <Link to={`/products/${_id}`}>
//     //     <img alt={name} src={`${image}`}/>
//     //     <p>{name}</p>
//     //     <p>{artistName}</p>
//     //   </Link>
//     // </div>
//     <div class="group mb-2">
//       <Link to={`/products/${id}`}>
//         <img
//           class="w-full mb-2 border-solid border-8 border-[#56280e] border-opacity-90 hover:border-opacity-100 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.75)]"
//           src={`${image}`}
//           alt={name}
//         />
//         <div class="invisible group-hover:visible text-center">
//           <p class="font-bold">{name}</p>
//           <p>{artistName}</p>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default ProductItem;


import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ _id, image, name, artistName }) {
  return (
    <div className="product-item group mb-2">
      <Link to={`/products/${_id}`}>
        <div className="product-image md:w-full mb-2">
          <img src={`${image}`} alt={name} className="border-solid border-8 border-[#56280e] border-opacity-90 hover:border-opacity-100 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.75)]"/>
        </div>
        <div className="product-info invisible group-hover:visible text-center">
          <h2 className="product-name font-bold">{name}</h2>
          <p className="product-artist">{artistName}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;