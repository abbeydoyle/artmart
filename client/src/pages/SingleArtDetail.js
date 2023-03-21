import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button } from "flowbite-react";

import Cart from "../components/Cart";
import Wishlist from "./MyWishlist";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
  ADD_TO_WISHLIST,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
//import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const addToWishlist = () => {
    const itemInWishlist = Wishlist.find(
      (WishlistItem) => WishlistItem._id === id
    );
    if (itemInWishlist) {
      idbPromise("wishlist", "put", {
        ...itemInWishlist,
      });
    } else {
      dispatch({
        type: ADD_TO_WISHLIST,
        product: { ...currentProduct },
      });
      idbPromise("wishlist", "put", { ...currentProduct });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };
  console.log(currentProduct);
  console.log(currentProduct.price);

  return (
    <>
      {currentProduct && cart ? (
        <div className="">
          <Link to={`/`}>← Back to Gallery</Link>
          <div className="grid md:grid-cols-3 gap-4 text-[#36392c]">
            <img
              src={`${currentProduct.image}`}
              alt={currentProduct.title}
              className="border-solid border-8 border-[#56280e] border-opacity-90 hover:border-opacity-100 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.75)] md:col-span-2 mt-8 mb-8 md:h-[40rem] h-[20rem]"
            />
            <div className="md:mt-8 md:mb-8 md:ml-5 text-center">
              <div className="content-center rounded-sm md:mt-[40%]">
                <div className="mb-3 text-xl">
                  <h2 className="font-bold">{currentProduct.name}</h2>
                  <p className="">{currentProduct.artistName}</p>
                  <p className="">{currentProduct.description}</p>
                </div>
                <div className="grid md:grid-cols-2 mb-3 md:mb-8">
                  <div>
                    <p className="mb-1 text-md md:float-left md:pl-[2rem]">
                      Select size:
                    </p>
                    <select className="w-[70%] rounded-lg bg-white hover:text-white hover:bg-[#36392c] focus:ring-2 focus:outline-none focus:ring-[#36392c]">
                      <option disabled>Size</option>
                      <option>5x7</option>
                      <option>8x10</option>
                      <option>18x24</option>
                      <option>24x36</option>
                    </select>
                  </div>
                  <div>
                    <p className="mb-1 text-md md:float-left md:pl-[2rem]">
                      Quantity:
                    </p>
                    <select className="w-[70%] rounded-lg bg-white hover:text-white hover:bg-[#36392c] focus:ring-2 focus:outline-none focus:ring-[#36392c]">
                      <option disabled>Qty</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <p className="mb-3 md:mb-8 text-lg">
                  <strong>Price: ${currentProduct.price} </strong>
                </p>
                {/* ${currentProduct.price}{" "} */}
                <div className="grid md:grid-cols-2 mb-3">
                  <div>
                    <button
                      className="w-[70%] text-[#36392c] hover:text-white border border-[#36392c] hover:bg-[#36392c] focus:ring-2 focus:outline-none focus:ring-[#36392c] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <button
                      className="w-[70%] text-[#36392c] hover:text-white border border-[#36392c] hover:bg-[#36392c] focus:ring-2 focus:outline-none focus:ring-[#36392c] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                      onClick={addToWishlist}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
