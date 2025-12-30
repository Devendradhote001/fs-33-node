const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/goa");
    if (res) {
      console.log("hogyaaa connect..");
    }
  } catch (error) {
    console.log("error hai mongo me", error);
  }
};

module.exports = connectDB;
