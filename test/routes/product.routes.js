const express = require("express");
const {
  createProductController,
} = require("../controllers/product.controllers");

const router = express.Router();

router.post("/create", createProductController);

module.exports = router;
