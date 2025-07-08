// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";
let prodModel = new ProductModel();
export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    let product = prodModel.fetchProducts();
    res.render("product", { product: product });
  };
}
