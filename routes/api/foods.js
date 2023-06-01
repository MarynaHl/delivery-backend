const express = require("express");
const foodsController = require("../../controllers/foodsController");

const router = express.Router();

router.get("/", foodsController.getFoods);

module.exports = router;
