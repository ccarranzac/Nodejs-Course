const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Users midleware!");
  res.send("<h1>The 'Users page'</h1>");
});

app.use("/", (req, res, next) => {
  console.log("main midleware!");
  res.send("<h1>Hello from express</h1>");
});

//execute this function with every incoming request
app.listen(3000);
