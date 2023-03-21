import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
// import spinner from '../../assets/spinner.gif';

function ProductList() {

//   const [state, dispatch] = useStoreContext();

//   const { currentCategory } = state; // I don't know if this is needed if we aren't doing categories at the moment

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     } else if (!loading) {
//       idbPromise('products', 'get').then((products) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: products,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);


  ///// REACH GOAL? /////

  //   function filterProducts() {
  //     if (!currentCategory) {
  //       return state.products;
  //     }


///// REACH GOAL? /////

//   function filterProducts() {
//     if (!currentCategory) {
//       return state.products;
//     }

//     return state.products.filter(
//       (product) => product.category._id === currentCategory
//     );
//   }


  // were not handing any props
  return (
    <div className="">

  
        <div>HELLO</div>
        <ProductItem />

      {/* {state.products.length ? (
        <div className="">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              title={product.name}
              artist={product.artistname}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )} */}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ProductList;
