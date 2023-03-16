const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    artistName: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 10.00
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0
    },
    Size: {
      type: boolean,
      required: true,
      min: [5*8, 8*10, 18*24, 24*36 ]
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'ArtCategory',
      required: true
    }
  });


const Product = mongoose.model('ArtProduct', itemSchema);

module.exports = ArtShowcase;