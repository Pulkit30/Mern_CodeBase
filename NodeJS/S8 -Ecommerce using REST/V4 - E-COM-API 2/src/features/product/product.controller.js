import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        console.log(req.body);
        console.log("this is a post request");
        res.status(200).send("Psot request received");
    }

    rateProduct(req,res){}

    getOneProduct(req,res){}

}