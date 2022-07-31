const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "add-product",
    formsCSS: true,
    productCSS: true,
    activeAdd: true,
  });
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.addNewProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      pageTitle: "Admin Products",
      path: "admin-products",
    });
  });
};
