const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/test-2");
    if (res) {
      console.log("Mongodb connected");
    }
  } catch (error) {
    console.log("error in mongodb");
  }
};

module.exports = connectDB;
