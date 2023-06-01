const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
  },
  shop: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
});

const Food = model("food", foodSchema);

module.exports = Food;
