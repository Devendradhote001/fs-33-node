const express = require("express");
const UserModel = require("./models/user.model");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/products.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
