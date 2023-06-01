const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user: {
      name: {
        type: String,
        required: [true, "Name is required"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
      },
      phone: {
        type: String,
        required: [true, "Phone is required"],
      },
      address: {
        type: String,
        required: [true, "Address is required"],
      },
    },
    order: {
      totalPrice: Number,
      date: {
        type: Date,
      },
      food: {
        type: Array,
        title: {
          type: String,
        },
      },
    },
  },
  { versionKey: false, timestamps: false }
);

const Order = model("order", orderSchema);

module.exports = Order;
