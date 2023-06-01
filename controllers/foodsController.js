const Food = require("../models/food");

const getFoods = async (req, res, next) => {
  try {
    const products = await Food.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFoods,
};
