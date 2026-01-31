const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/rzp");

    if (res) {
      console.log("Mongodb connected");
    }
  } catch (error) {
    console.log("error while connecting Db");
  }
};

module.exports = connectDb;

// async await
// .then.catch
