const Shop = require("../models/shop");

const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getShops,
};
