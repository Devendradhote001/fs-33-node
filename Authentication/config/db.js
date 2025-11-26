const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/authentication");
    if (res) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log("error in mongodb connection");
  }
};

module.exports = connectDB;
