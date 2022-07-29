const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
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
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "shop",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
