const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/productsssss");
    if (res) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log("Error while connecting MONGODB");
  }
};

module.exports = connectDB;
