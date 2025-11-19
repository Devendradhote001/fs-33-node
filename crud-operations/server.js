const express = require("express");
const UserModel = require("./models/user.model");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/register", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.send("bhai puura bhej");
    }

    let newUser = await UserModel.create({
      name,
      email,
      mobile,
      password,
    });

    return res.send(newUser);
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
});

app.get("/users", async (req, res) => {
  try {
    let users = await UserModel.find({});

    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) {
      return res.send("id de la**de");
    }

    let user = await UserModel.findById(user_id);

    if (!user) {
      return res.send("user not found");
    }

    return res.send(user);
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
});

app.put("/user-update/:id", async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) {
      return res.send("id not found");
    }
    let { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res.send("bhai puura bhej");
    }

    let updatedUser = await UserModel.findByIdAndUpdate(
      user_id,
      {
        name,
        email,
        mobile,
        password,
      },
      {
        new: true,
      }
    );

    await updatedUser.save();

    return res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) {
      return res.send("id not found");
    }

    let delUser = await UserModel.findByIdAndDelete(user_id);

    return res.send("user deleted");
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
