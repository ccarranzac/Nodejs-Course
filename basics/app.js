const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

//execute this function with every incoming request
app.listen(3000);
