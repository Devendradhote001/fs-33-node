const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs", {
    data: ["hello", "byee", "gharjao", "gateudharhai"],
  });
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
