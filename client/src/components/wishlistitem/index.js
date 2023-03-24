// FUTURE GOAL
import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_WISHLIST} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const WishlistItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromWishlist = (item) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      _id: item._id,
    });
    idbPromise("wishlist", "delete", { ...item });
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromWishlist(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
