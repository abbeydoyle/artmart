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
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
    console.log(item);
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  // const value = localStorage.getItem(20);
  // console.log(value);
  return (
    // <div className="flex-row">
    //   <div>{/* <img src={`/images/${item.image}`} alt="" /> */}</div>
    //   <div>
    //     <div>
    //       {item.name}, ${value}
    //     </div>
    //     <div>
    //       <span>Qty:</span>
    //       <input
    //         type="number"
    //         placeholder="1"
    //         value={item.purchaseQuantity}
    //         onChange={onChange}
    //       />
    //       <span
    //         role="img"
    //         aria-label="trash"
    //         onClick={() => removeFromCart(item)}
    //       >
    //         🗑️
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full max-w-sm bg-white rounded-lg relative m-8 text-[#36392c] nosplit">
      <img
        className="rounded-lg border-solid border-8 border-[#56280e]"
        src={`${item.image}`}
        alt={item.name}
      />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight">
            {item.name}
          </h5>
        </a>
        <span>Qty:</span>
        <input
          type="number"
          placeholder="1"
          value={item.purchaseQuantity}
          onChange={onChange}
          className="border border-transparent w-[20%]"
        />
        <span className="text-xl font-bold float-right">
          ${item.price}
        </span>
        <div className="flex items-center justify-between absolute bottom-0 right-0">
          <a onClick={() => removeFromCart(item)}>
            🗑️ <span className="hover:underline">Remove from Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
