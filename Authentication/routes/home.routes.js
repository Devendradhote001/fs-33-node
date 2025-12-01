const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.send("me inn hu...");
});

module.exports = router;
