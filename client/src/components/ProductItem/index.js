import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {

    const [state, dispatch] = useStoreContext();


  const {
    image,
    name, // title,
    artistName, // artist
    _id,
    // price,
    // quantity
  } = item;


    const { cart } = state

  //TODO: we probably don't need addToCart here because you won't be able to add to cart straight from homepage without going to the artwork?
    // const addToCart = () => {
    //   const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    //   if (itemInCart) {
    //     dispatch({
    //       type: UPDATE_CART_QUANTITY,
    //       _id: _id,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    //     });
    //     idbPromise('cart', 'put', {
    //       ...itemInCart,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    //     });
    //   } else {
    //     dispatch({
    //       type: ADD_TO_CART,
    //       product: { ...item, purchaseQuantity: 1 }
    //     });
    //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    //   }
    // }

  return (
    <div className="">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`${image}`}/>
        <p>{name}</p>
        <p>{artistName}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
