const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/crud");
    if (res) {
      console.log("mongoDB connected");
    }
  } catch (error) {
    console.log("error while connecting mongoDB");
  }
};

module.exports = connectDB;
