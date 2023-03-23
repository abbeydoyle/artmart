const typeDefs = `#graphql
  type ArtCategory {
    _id: ID
    name: String
  }
  type ArtSize {
    _id: ID
    price: Float
    size: String
  }
  type ArtProduct {
    _id: ID
    name: String
    artistName: String
    description: String
    image: String
    sizes: [ArtSize] 
    category: ArtCategory
  }

  type ArtOrder {
    _id: ID
    purchaseDate: String
    products: [ArtProduct]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    address: String
    password: String
    email: String
    orders: [ArtOrder]
  }

  

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [ArtCategory]
    sizes: [ArtSize]
    size(_id: ID!): ArtSize
    products: [ArtProduct]
    product(_id: ID!): ArtProduct
    user: User
    order(_id: ID!): ArtOrder
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): ArtOrder
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): ArtProduct
    updateAddress(mailAddress: String!): User
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
