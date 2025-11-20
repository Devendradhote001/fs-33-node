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

    return res.send(newUser);
  } catch (error) {
    console.log(error);
    res.send("error in registration", error);
  }
};

let getAllUsersController = async (req, res) => {
  try {
    let allUsers = await UserModel.find({});

    return res.send(allUsers);
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

module.exports = {
  registerUserController,
  getAllUsersController,
  deleteUserController,
};
