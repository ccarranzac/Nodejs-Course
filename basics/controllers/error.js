exports.get404 = (req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found", path: "" });
  //res.sendFile(path.join(__dirname, "views", "404.html"));
};
