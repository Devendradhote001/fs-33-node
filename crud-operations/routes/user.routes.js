const express = require("express");
const {
  registerUserController,
  getAllUsersController,
  deleteUserController,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerUserController);
router.get("/", getAllUsersController);
router.delete("/delete/:id", deleteUserController);

module.exports = router;
