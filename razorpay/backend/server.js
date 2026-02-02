require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const paymentRoutes = require("./routes/payment.routes");

connectDb();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/payment", paymentRoutes);

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
