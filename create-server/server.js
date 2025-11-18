const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/user.model");

const app = express();

app.use(express.json());

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/raftaar");
    if (res) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log("error while connecting md");
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("heyy i m express");
});

app.post("/create-user", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    let user = await UserModel.create({
      name,
      email,
      mobile,
      password,
    });

    return res.send(user);
  } catch (error) {
    return res.send(error);
  }
});

app.listen(3000, () => {
  console.log("i m running on port 3000");
});
