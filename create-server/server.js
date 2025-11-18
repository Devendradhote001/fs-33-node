const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/user.model");

const app = express();

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/dhvani");
    if (res) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log("mongodb error");
  }
};

connectDB();

app.get("/create-user", async (req, res) => {
  let user = await UserModel.create({
    name: "panu mandal",
    email: "ranu@gmail.com",
    mobile: "9876543210",
    password: "12345678",
  });

  res.send(user);
});

app.listen(3000, () => {
  console.log("i m running on port 3000");
});
