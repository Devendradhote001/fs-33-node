const UserModel = require("../models/user.model");

let registerUserController = async (req, res) => {
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

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

let getAllUsersController = async (req, res) => {
  try {
    let allUsers = await UserModel.find({});

    return res.status(200).json({
      message: "Fetched all users",
      users: allUsers,
    });
  } catch (error) {
    console.log("error getting users", error);
  }
};

let deleteUserController = async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) return "User id not found";

    let delUSer = await UserModel.findByIdAndDelete(user_id);
    return res.send("user deleted");
  } catch (error) {
    console.log("error while deleting user", error);
  }
};

let getSingleUserController = async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) {
      return res.send("Id not found");
    }

    let user = await UserModel.findById(user_id);

    return res.send(user);
  } catch (error) {
    console.log("error in getting single user", error);
  }
};

const updateUserDataController = async (req, res) => {
  try {
    let user_id = req.params.id;

    if (!user_id) return res.send("Id not found");
    let { name, email, password, mobile } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.send("All fields are required");
    }

    let updatedUser = await UserModel.findByIdAndUpdate(user_id, req.body, {
      new: true,
    });

    return res.send(updatedUser);
  } catch (error) {
    console.log("error in update api", error);
  }
};

module.exports = {
  registerUserController,
  getAllUsersController,
  deleteUserController,
  getSingleUserController,
  updateUserDataController,
};
