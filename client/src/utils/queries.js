import { gql } from "@apollo/client";

// do we name it products?? have to understand naming conventions
// getCheckout also referenced in cart -> index.js - name has to be same because we call that specific query.
// checkout I think is in typeDefs and resolvers.
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;


export const QUERY_PRODUCTS = gql`
    query getProducts($category: ID) {
        products(category: $category) {
            _id
            name
            artistname
            description
            image
            size
            category {
                _id
            }
        }
    }
`;

