import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";
import { sendMail } from "../services/mail.service.js";

export const registerController = async (req, res) => {
  try {
    let { username, email, mobile, password } = req.body;

    if (!username || !email || !mobile || !password) {
      return res.status(401).json({
        message: "All fields are required",
      });
    }

    let hashPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      username,
      email,
      mobile,
      password: hashPass,
    });

    if (!newUser)
      return res.status(401).json({
        message: "Something went wrong",
        error,
      });

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "User registered",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(404).json({
        message: "All fields are required",
      });

    let user = await UserModel.findOne({
      email,
    });

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    let comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass)
      return res.status(403).json({
        message: "Invalid credentials",
      });

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "User logged in",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    let { user_id } = req.body;

    if (!user_id)
      return res.status(404).json({
        message: "Id not found",
      });

    res.clearCookie("token");

    return res.status(200).json({
      message: "User logged out",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const forgetPasswordController = async (req, res) => {
  try {
    let { email } = req.body;
    console.log(email);

    let existingUser = await UserModel.findOne({ email });

    if (!existingUser)
      return res.status(401).json({
        message: "user not found! unauthorize",
      });

    let rawToken = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_RAW_SECRET,
      {
        expiresIn: "10m",
      }
    );

    let resetLink = `http://localhost:3000/api/auth/reset-password/${rawToken}`;

    let send = await sendMail(
      "ddhote780@gmail.com",
      "Rest password",
      resetLink
    );

    return res.status(200).json({
      message: "Reset link sent to your registered gmail",
    });
  } catch (error) {
    console.log("error while sending mail", error);
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    let { token } = req.params;

    if (!token)
      return res.status(404).json({
        message: "beta nahi mila token",
      });

    let decode = jwt.verify(token, process.env.JWT_RAW_SECRET);

    return res.render("reset.ejs", { id: decode.id });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
