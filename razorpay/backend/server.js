require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");

connectDb();

const app = express();

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
