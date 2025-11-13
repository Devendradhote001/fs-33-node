const express = require("express");
const userModel = require("./models/user.model");
const mongoose = require("mongoose");

const app = express();

let connectDb = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/doremon");
    if (res) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log("error in mongodb");
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send("heyy i m express");
});

app.get("/create-user", async (req, res) => {
  let newUser = await userModel.create({
    username: "rajurastogi",
    mobile: 123456789,
    email: "raju@gmail.com",
  });

  console.log(newUser);

  res.send(newUser);
});

app.listen(3000, () => {
  console.log("i m running on port 3000");
});

// install homebrew
// brew tap mongodb/brew
// brew update
// brew install mongodb-community@8.1
// brew services start mongodb-community@8.1
