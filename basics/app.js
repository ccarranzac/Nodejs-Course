const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
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

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found", path: "" });
  //res.sendFile(path.join(__dirname, "views", "404.html"));
});

//execute this function with every incoming request
app.listen(3000);
