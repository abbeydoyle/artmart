const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//models for Untitle file name base for list of items by artist
const resolvers = {
    
    Query: {
      Untitles: async () => {
        return await titles.find();
      },
      products: async (parent, { untitle, name }) => {
        const params = {};
  
        if (untitle) {
          params.untitle = untitle;
        }
  
        if (name) {
          params.name = {
            $regex: name,
          };
        }
  
        return await Product.find(params).populate("untitle");
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate("untitle");
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: "untitleartproduct",
            // path from a order of a product
            populate: "untitle",
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
            path: "untitleartproduct",
            // path from a order of a product
            populate: "untitle",
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
        const order = new Order({ products: args.products });
        const line_items = [];
  
        const { products } = await order.populate("products");
  
        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`],
          });
  
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: "usd",
          });
  
          line_items.push({
            price: price.id,
            quantity: 1,
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });
  
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
          const order = new Order({ products });
  
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
  
        return await Product.findByIdAndUpdate(
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
  