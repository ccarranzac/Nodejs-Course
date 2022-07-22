const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In other midleware!");
  res.send("<h1>The 'Add product page'</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In other midleware!");
  res.send("<h1>Hello from express</h1>");
});

//execute this function with every incoming request
app.listen(3000);
