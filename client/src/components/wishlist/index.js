// THIS IS A FUTURE GOAL
// CREATE A WISHLIST SIMILAR TO CART
import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import Wishlistitem from "../wishlistitem/index";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MULTIPLE_TO_WISHLIST} from "../../utils/actions";

const Wishlistcomponent = () => {
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
      async function getCart() {
        const cart = await idbPromise("wishlist", "get");
        dispatch({ type: ADD_MULTIPLE_TO_WISHLIST, products: [...cart] });
      }
  
      if (!state.wishlist.length) {
        getCart();
      }
    }, [state.wishlist.length, dispatch]);
  
    return (
      <div className="Wishlist">
        <h2>Wishlist</h2>
        {state.wishlist.length ? (
          <div>
            {state.wishlist.map((item) => (
              <Wishlistitem key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
            </span>
            You haven't added anything to your Wishlist yet!
          </h3>
        )}
      </div>
    );
  };
  
  export default Wishlistcomponent ;
  