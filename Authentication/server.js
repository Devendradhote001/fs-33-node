require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
