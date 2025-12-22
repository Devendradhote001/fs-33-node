const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { sendFilesToIK } = require("./services/imagekit");

const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors("*"));

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });

let storage = multer.memoryStorage();

let upload = multer({ storage });

app.post("/getImg", upload.single("image"), async (req, res) => {
  let fileData = req.file;
  console.log(fileData);
  let iku = await sendFilesToIK(fileData.buffer, fileData.originalname);
  console.log(iku);
  return res.send(fileData);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
