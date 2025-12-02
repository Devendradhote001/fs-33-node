const express = require("express");
const {
  registerUserController,
  loginUserController,
  logoutUserController,
} = require("../controllers/user.controllers");

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);

module.exports = router;
