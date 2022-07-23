const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("In other midleware!");
  res.send("<h1>Hello from express</h1>");
});

module.exports = router;
