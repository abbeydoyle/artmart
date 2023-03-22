const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "ArtProduct",
    },
  ],
  // size: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'ArtSize'
  //     }
  // ]
});

const ArtOrder = mongoose.model("ArtOrder", orderSchema);

module.exports = ArtOrder;
