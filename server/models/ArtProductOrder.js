const mongoose = require("mongoose");
const { Schema } = mongoose;
const ArtProduct = require("./ArtProduct");
const orderProductSchema = new Schema({
  productName: [ArtProduct],
  chosenSize: {
    type: String,
  },
  purchaseQty: {
    type: String,
  },
  purchasePrice: {
    type: String,
  },
  keyValue: {
    type: String,
  },
});

const ArtProductOrder = mongoose.model("ArtProductOrder", orderProductSchema);

module.exports = ArtProductOrder;
