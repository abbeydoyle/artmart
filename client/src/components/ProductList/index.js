import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
// import spinner from '../../assets/spinner.gif';
import { Link, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  //   const { currentCategory } = state; // I don't know if this is needed if we aren't doing categories at the moment

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log(data);

  useEffect(() => {
    if (data) {
      console.log(data);
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

  ///// REACH GOAL? /////

  //   function filterProducts() {
  //     // if (!currentCategory) {
  //     //   return state.products;
  //     // }

  //     return state.products.filter(
  //       (product) => product.category._id === currentCategory
  //     );
  //   }

  return (
    <main className="whitespace-nowrap text-sm">
      <div className="gap-4 md:columns-5 columns-2 m-5 whitespace-nowrap">
        <div className="">
          <>{console.log(state)}</>
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

          {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
        </div>
      </div>
    </main>
  );
}

export default ProductList;
