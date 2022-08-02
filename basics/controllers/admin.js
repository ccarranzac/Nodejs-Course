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

exports.getEditProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    console.log(product);
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "edit-product",
      product: product,
    });
  });
};

exports.postEditProduct = (req, res) => {};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "admin-products",
    });
  });
};
