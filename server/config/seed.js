const db = require('./connection');
const { User, ArtShowcase, ArtCategory } = require('../models');

db.once('open', async () => {
  await ArtCategory.deleteMany();

  const categories = await ArtCategory.insertone([
    { name: 'ART work' },
  ]);

  console.log('categories seeded');

  await ArtShowcase.deleteMany();

  const products = await ArtShowcase.insertMany([
    {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        price: [10.00, 20.00, 40.00, 60.00],
        quantity: 5,
        size: 
      },
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        price: [10.00, 20.00, 40.00, 60.00],
        quantity: 5,
        size: 
      },
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        price: [10.00, 20.00, 40.00, 60.00],
        quantity: 5,
        size: 
      },
      {
        artistName: 'name of artist',  
        name: 'Name of Art',
        description: 'Description of Art',
        image: '.jpg',
        category: categories[0]._id,
        price: [10.00, 20.00, 40.00, 60.00],
        quantity: 5,
        size: 
      }
   
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

  console.log('users seeded');

  process.exit();
});