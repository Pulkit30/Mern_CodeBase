import path from "path";

export default class ProductController {
  getProducts(req, res) {
    console.log(path.resolve());
    console.log(path.join(path.resolve(), "src", "views", "products.html"));
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "products.html")
    );
  }
}
