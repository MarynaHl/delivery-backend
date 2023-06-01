const Order = require("../models/order");
const { RequestError } = require("../helpers");
const { orderSchema } = require("../schemas/orders");

const addOrder = async (req, res, next) => {
  try {
    const { error } = orderSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const result = await Order.create({
      ...req.body,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addOrder,
};
