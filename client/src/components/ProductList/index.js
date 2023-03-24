// imports and dependencies
import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
const chalk = require('chalk');

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  (chalk.bgHex('#508192').white((data)));

  // update and display products
  // display spinner while loading or if no data
  useEffect(() => {
    if (data) {
      console.log(chalk.bgHex('#508192').white((data)));
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <main className="text-sm">
      <div className="gap-4 md:columns-5 columns-2 m-5 ">
        <div className="">
          <>{console.log(chalk.bgHex('#508192').white((state)))}</>
          {state.products.length ? (
            <div className="">
              {state.products.map((product) => (
                <Link to={`/products/${product._id}`}>
                  <ProductItem
                    key={product._id}
                    _id={product._id}
                    id={product._id}
                    image={product.image}
                    name={product.name}
                    artistName={product.artistName}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div><Spinner color="warning" aria-label="Warning spinner example" size="lg"/></div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductList;
