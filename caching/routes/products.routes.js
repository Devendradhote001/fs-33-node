const express = require("express");
const { model } = require("mongoose");
const {
  createProductController,
  getAllProductsController,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/create", createProductController);
router.get("/", getAllProductsController);

module.exports = router;
