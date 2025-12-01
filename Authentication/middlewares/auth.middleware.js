const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.models");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token) {
      return res.status(404).json({
        message: "Token not found! Unauthorized, bahut galat admi ho",
      });
    }

    let decoded = jwt.verify(token, process.env.jwt_secret_key);

    if (!decoded)
      return res.status(401).json({
        message: "bhai galat token mat de",
      });

    let user = await UserModel.findById(decoded.id);

    req.user = user;
     
  } catch (error) {
    return res.status(401).json({
      message: "Invalit or token not found",
    });
  }
};

module.exports = authMiddleware;
