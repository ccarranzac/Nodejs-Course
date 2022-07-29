const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine(
//   "handlebars",
//   expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" })
// );
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
//serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//execute this function with every incoming request
app.listen(3000);
