const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ArtProduct'
    }
  ]
});

const Order = mongoose.model('ArtOrder', orderSchema);

module.exports = ArtOrder;