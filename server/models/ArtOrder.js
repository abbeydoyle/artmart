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
});

const ArtOrder = mongoose.model("ArtOrder", orderSchema);

module.exports = ArtOrder;
