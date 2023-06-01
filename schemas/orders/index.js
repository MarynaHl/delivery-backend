const Joi = require("joi");

const orderSchema = Joi.object({
  user: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  },
  order: {
    date: Joi.date(),
    totalPrice: Joi.date(),
    food: Joi.array(),
  },
});

module.exports = { orderSchema };
