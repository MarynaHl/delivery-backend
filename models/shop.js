const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
  },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
