import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import { router as productRoutes } from "./routes/product.routes.js";

import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorMiddleware } from "./middlewares/error.middleware.js";

connectDB();
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.render("index.ejs");
});

app.get("/email-page", (req, res) => {
  return res.render("email.ejs");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// steps-----
// 1. ek page jisme hoga foget password button -> ejs
// 2. api jo open karega forget password wala page

// 3. jab click hoga fp tb ek naya page open hoga
//  jisme tum user se email loge

// 4. uss email page me tumhe post api call karna hai
// to tum form bnaoge jisme tum action  me api doge or method
// post likhoge

// 5. yaaaaaddd rakhna formdata me name
//  attribute se data jata hai

// 6. make fp api jisme tum accept kroge ---
// email then find user then make
// rawtoken then restelink jisme rawtoken hoga then send mail

// 7. mail send hone k baad user click krega link pe
// fr tumhe params se token lena hai then verify with your jwt-raw-secret
// fir decode k baad show hoga reset password page sath me id bhi pass krna.

// 8. make final api jisme tum password reset kroge.
// so id  milegi params se or password milega body me
// or id ke basis pr upadte krso password that's it.
