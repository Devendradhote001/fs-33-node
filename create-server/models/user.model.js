const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  mobile: Number,
  email: String,
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
