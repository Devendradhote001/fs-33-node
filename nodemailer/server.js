const express = require("express");
const sendMail = require("./services/mail.service");

const app = express();

app.get("/send-mail", async (req, res) => {
  let mail = await sendMail(
    "ddhote780@gmail.com",
    "Testing..",
    `<div><h1>Bhadhiya hai</h1></div>`
  );

  return res.send("mail chala gaya");
});

app.listen(3000, () => {
  console.log("server chal raha hai 3000 p");
});
