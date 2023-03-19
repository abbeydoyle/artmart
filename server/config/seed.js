const db = require("./connection");
const { User, ArtProduct, ArtCategory } = require("../models");

db.once("open", async () => {
  await ArtCategory.deleteMany();

  const categories = await ArtCategory.insertMany([
    { name: "print" },
    { name: "handmade" },
    { name: "graphic" },
  ]);

  console.log("categories seeded");

  await ArtProduct.deleteMany();

  const products = await ArtProduct.insertMany([
    {
      name: "Name of Art",
      artistName: "name of artist",
      description: "Description of Art",
      image: ".jpg",
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
      category: categories[0]._id,
    },

    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[0]._id,

      sizs: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },

    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[1]._id,

      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },

    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[1]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },
    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[1]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },
    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[1]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },
    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[2]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },
    {
      artistName: "name of artist",
      name: "Name of Art",
      description: "Description of Art",
      image: ".jpg",
      category: categories[2]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { price: 20.0, size: "8x10" },
        {
          price: 30.0,
          size: "18x24",
        },
        {
          price: 40.0,
          size: "24x36",
        },
      ],
    },
  ]);

  console.log("art seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Hoon",
    lastName: "Kim",
    email: "hkim@email.com",
    password: "password12345",
    address: "12534 bcamp ave sw lynnwood, Wa 88888",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "nooh",
    lastName: "mik",
    email: "nmik@email.com",
    password: "password12345",
    address: "123 bootcamp ave n seattle, Wa 99999",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  // await User.create({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  // await User.create({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  // await User.create({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  // await User.create({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  console.log("users seeded");

  process.exit();
});
