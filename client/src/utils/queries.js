// database
import { gql } from "@apollo/client";

// this is us calling our server - we are giving it a list of products
// it's going to return back a stripe generated session
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

// get all products
export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
    _id
    artistName
    description
    image
    name
    sizes {
      price
      size
    }
  }}
`;
