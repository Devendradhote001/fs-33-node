const UserModel = require("../models/user.models");
const bcrypt = require("bcrypt");

const registerUserController = async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let hashPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      name,
      email,
      mobile,
      password: hashPass,
    });

    return res.status(201).json({
      message: "User registered",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports = {
  registerUserController,
};
