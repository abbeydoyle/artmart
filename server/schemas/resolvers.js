const { GraphQLError } = require("graphql");
const {
  User,
  ArtProduct,
  ArtCategory,
  ArtOrder,
  ArtSize,
} = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51MllX3CqIZpk4OuxCGBxjStuTLuhrAPY6PTT1MDyrM0yGwO1tNpj9bw94JoipZhkJmpaVWetuGOqmLee2MRSzWta00gjsoUCAE"
);

const resolvers = {
  Query: {
    categories: async () => {
      return await ArtCategory.find();
    },
    products: async (parent, { category, name }) => {
      return await ArtProduct.find({}).populate("category");
    },

    product: async (parent, { _id }) => {
      return await ArtProduct.findById(_id).populate("category");
    },

    size: async (parent, { _id }) => {
      return await ArtSize.findById(_id).populate("sizes");
    },
    sizes: async (parent, { category, name }) => {
      return await ArtSize.find({}).populate("product");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          // populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new ArtOrder({ products: args.products });
      const line_items = [];
      const { products } = await order.populate("products");
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products
          .create({
            name: products[i].name,
            description: products[i].description,
            images: [`google.com`],
          })
          .catch((err) => console.log(err));
        const price = await stripe.prices
          .create({
            product: product.id,
            unit_amount: 2000,
            currency: "usd",
          })
          .catch((err) => console.log("price error", err));
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      console.log(url);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      console.log("session", session);
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new ArtOrder({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await ArtProduct.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("Incorrect credentials", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
