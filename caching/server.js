const express = require("express");
const productRoutes = require("./routes/products.routes");
const connectDB = require("./config/db");
const cacheInstance = require("./services/cache.service");

const app = express();

connectDB();

cacheInstance.on("connect", () => {
  console.log("Redis join ho gaya");
});

cacheInstance.on("error", (err) => {
  console.log("Redis nahi chlra", err);
});

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("me chalgya 3000 p ");
});
