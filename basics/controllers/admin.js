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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "admin-products",
    });
  });
};