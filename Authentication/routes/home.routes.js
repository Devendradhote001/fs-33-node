const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  console.log(req.user);
  res.send("Yaha mera account details hai to ye safe rehna zaruri hai");
});

module.exports = router;
