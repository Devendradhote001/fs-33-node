const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/", upload.single("image"), (req, res) => {
  let data = req.file;
  console.log(data);
  res.send(data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
