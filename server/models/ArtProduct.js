const mongoose = require("mongoose");
const { Schema } = mongoose;
const Size = require("./Size");
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  artistName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  sizes: [Size.schema],

  category: {
    type: Schema.Types.ObjectId,
    ref: "ArtCategory",
    required: true,
  },
});

const ArtProduct = mongoose.model("ArtProduct", productSchema);

module.exports = ArtProduct;
