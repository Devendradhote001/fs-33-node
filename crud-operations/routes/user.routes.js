const express = require("express");
const {
  registerUserController,
  getAllUsersController,
  deleteUserController,
  getSingleUserController,
  updateUserDataController,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerUserController);
router.get("/", getAllUsersController);
router.get("/:id", getSingleUserController);
router.put("/update/:id", updateUserDataController);
router.delete("/delete/:id", deleteUserController);

module.exports = router;
