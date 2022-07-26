const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  console.log("In other midleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
