import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Detail from "../../pages/SingleArtDetail";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      key: item.key,
    });
    idbPromise("cart", "delete", { ...item });
    console.log("deleted", item);
  };

  const onChange = (e) => {
    const value = e.target.value;
    // console.log("value on change", value);
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item.key,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item.key,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  // const value = localStorage.getItem(20);
  // console.log (value)

  // console.log(value);
  // const price = value.price;
  // // console.log(price);
  // const size = value.size;
  //   // console.log(size);
  return (
    <div className="flex-row">
      <div>{/* <img src={`/images/${item.image}`} alt="" /> */}</div>
      <div>
        <div>{item.key}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
