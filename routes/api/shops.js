const express = require("express");
const shopsController = require("../../controllers/shopsController");

const router = express.Router();

router.get("/", shopsController.getShops);

module.exports = router;
