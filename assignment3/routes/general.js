const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("general");
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
