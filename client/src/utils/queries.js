import { gql } from "@apollo/client";

// do we name it products?? have to understand naming conventions
// getCheckout also referenced in cart -> index.js - name has to be same because we call that specific query.
// checkout I think is in typeDefs and resolvers.

// this is us calling our server - we are giving it a list of products
// it's going to return back a stripe generated session
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
    _id
    artistName
    description
    image
    name
    sizes {
        _id
        price
        size
      }
    }
  }
`;
