import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";

export const registerController = async (req, res) => {
  try {
    let { username, email, mobile, password } = req.body;

    if (!username || !email || !mobile || !password) {
      return res.status(401).json({
        message: "All fields are required",
      });
    }

    let hashPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create()

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
