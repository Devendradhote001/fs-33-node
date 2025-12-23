require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { uploadFileToIMAGEKIT } = require("./services/storage.service");

const app = express();

app.use(express.json());
app.use(cors("*"));

let storage = multer.memoryStorage();

let upload = multer({ storage });

app.post("/getImg", upload.array("image", 5), async (req, res) => {
  let fileData = req.files;

  let utik = await Promise.all(
    fileData.map(async (elem) => {
      return await uploadFileToIMAGEKIT(elem.buffer, elem.originalname);
    })
  );

  console.log(utik);
  res.send(utik);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// req.file ---> single object kuki tum single method kla use karte ho
// req.files ----> tum array method ka use krre ho to tumhe [] milega
