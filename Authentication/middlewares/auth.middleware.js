const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.models");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token)
      return res.status(401).json({
        message: "Token not found! Unauthorized",
      });

    let decoded = jwt.verify(token, process.env.jwt_secret_key);

    if (!decoded)
      return res.status(401).json({
        message: "Invalid token",
      });

    let user = await UserModel.findById(decoded.id);

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or Token not found",
    });
  }
};

module.exports = authMiddleware
