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
      name: "Water Lilies and Japanese Bridge",
      artistName: "Claude Monet",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679529728/1256px-Claude_Monet_-_Water_Lilies_and_Japanese_Bridge_gkntgr.jpg",
      category: categories[0]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { 
          price: 20.0, 
          size: "8x10" 
        },
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
      artistName: "Charles James Lewis",
      name: "Reading by the Window",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679290114/reading_x38196.jpg",
      category: categories[0]._id,

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
      artistName: "Thomas Cole",
      name: "The Savage State",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679345559/Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836_fbv5ds.jpg",
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
      artistName: "Clause Monet",
      name: "Pathway in Monet's Garden at Giverny",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679529924/garden-path-at-giverny_rmihku.jpg",
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
      artistName: "Vincent van Gogh",
      name: "Sunflowers",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679290134/sunflowers_yprtbp.jpg",
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
      artistName: "Thomas Cole",
      name: "The Arcadian or Pastoral State",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679345651/Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836_rwxztd.jpg",
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
      artistName: "Hokusai",
      name: "The Great Wave off Kanagawa",
      description: "Ink print",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679530026/main-image_q3xj5c.jpg",
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
      artistName: "Bob Ross",
      name: "Mountain Glory",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679339414/70736-1024__44526_jc1e45.jpg",
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
      artistName: "Thomas Cole",
      name: "The Consummation of Empire",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679345827/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836_bbhni6.jpg",
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
      artistName: "Vincent van Gogh",
      name: "Starry Night Over the Rhône",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679530161/the-starry-night-over-the-rhone_txvdu9.jpg",
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
      artistName: "Gustav Klimt",
      name: "Birch Forest I",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679340591/painting_reproduction-gustav_klimt-the_birch_wood_web_n0wszc.jpg",
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
      name: "Cliffs by the Sea at Trouville",
      artistName: "Gustave Caillebotte",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679530345/Screen_Shot_2023-03-22_at_5.12.00_PM_aah4lz.png",
      category: categories[0]._id,
      sizes: [
        {
          price: 10.0,
          size: "5x7",
        },
        { 
          price: 20.0, 
          size: "8x10" 
        },
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
      artistName: "Thomas Cole",
      name: "Destruction",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679341629/1858_4_fvd2fb.jpg",
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
      artistName: "Banksy",
      name: "128 Balloon Girl",
      description: "Stencil painting",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679340587/128-balloon-girl_u-l-q139zel0_vflf0i.jpg",
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
      artistName: "Pierre-Auguste Renoir",
      name: "Roses and Jasmine in a Delft Vase",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679340868/1gKSqPq1.mockup_fprvsa.jpg",
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
      artistName: "Edgar Degas",
      name: "Dancers in Blue",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679340981/bddf3895df81bd773328b68972754d27_x70855.jpg",
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
      artistName: "Thomas Cole",
      name: "Desolation",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679346049/Cole_Thomas_The_Course_of_Empire_Desolation_1836_wlisok.jpg",
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
      artistName: "Childe Hassam",
      name: "Ocean View",
      description: "Oil on canvas",
      image: "https://res.cloudinary.com/duxmtidm1/image/upload/v1679341630/1-ocean-view-childe-hassam_odnxph.jpg",
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
  ]);

  console.log("art seeded");

  await User.deleteMany();

  await User.create({
    firstName: "hoon",
    lastName: "kim",
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
