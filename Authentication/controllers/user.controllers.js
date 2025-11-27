const UserModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserController = async (req, res) => {
  try {
    // receiving data
    let { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    // hash password
    let hashPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      name,
      email,
      mobile,
      password: hashPass,
    });

    // generate JWT token

    let token = jwt.sign({ id: newUser._id }, process.env.jwt_secret_key, {
      expiresIn: "1h",
    });

    console.log("jwt token->", token);

    return res.status(201).json({
      message: "User registered",
      user: newUser,
    });
  } catch (error) {
    console.log("error in regitartion", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports = {
  registerUserController,
};
