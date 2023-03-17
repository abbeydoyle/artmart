const db = require('./connection');
const { User, ArtProduct, ArtCategory } = require('../models');

db.once('open', async () => {
  await ArtCategory.deleteMany();

  const categories = await ArtCategory.insertMany([
    { name: 'Digital Print' },
    { name: 'Hand Drawn' },
    { name: 'poster' }  
  ]);

  console.log('categories seeded');

  await ArtProduct.deleteMany();

  const products = await ArtProduct.insertMany([
    {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[1]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[1]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[1]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[1]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[2]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[2]._id,
        size: [{
          price: 10.00,
          size: "5x7"
        },
        {price: 20.00,
        size: "8x10"
        },
        {
          price:30.00,
          size: "18x24"
        },
        {
          price: 40.00,
          size: "24x36"
        }
      ]},
    ]);

  console.log('art seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Hoon',
    lastName: 'Kim',
    email: 'hkim@email.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'nooh',
    lastName: 'mik',
    email: 'nmik@email.com',
    password: 'password12345'
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  console.log('users seeded');

  process.exit();
});
