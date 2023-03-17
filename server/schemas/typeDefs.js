const typeDefs = `#graphql
  type ArtCategory {
    _id: ID
    name: String
  }

  type ArtProduct {
    _id: ID
    name: String
    artistname: Strig
    description: String
    image: String
    size: String 
    category: Category
  }

  type ArtOrder {
    _id: ID
    userid: String
    size: String
    user: [user]
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    address: String
    Password: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    ADD_USER(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    LOGIN_USER(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;