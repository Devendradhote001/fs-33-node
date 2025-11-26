const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
