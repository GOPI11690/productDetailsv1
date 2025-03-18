const Product=require("./model/productModel") 
const connectDB=require("./config/db");
const { default: mongoose } = require("mongoose");


const displayAllProducts=async (req,res) => {
    try{
        connectDB(); // open the db connection 

            //get all products from db
        const productList=await Product.find({});
        res.status(200).json(productList);

        mongoose.connection.close(); //close the db connection
    }
    catch(e){
        res.send(e);
    }
};

const addProduct= async (req,res) => {
    try{
            // open the db connection 
        connectDB();
        
        //create product details
        const product=  new Product({
            productName:"New Shirt",
            price:1000,
            description:"Newly customized shirt",
            category:"Mens Clothing",
            rating:5,
        });
        //add the data to db
        await product.save().then(() => 
            console.log(product.productName +" added") );
        res.status(200).json(product);
        
        //close the db connection
        mongoose.connection.close();
    }
    catch(e){
        res.send(e);
    }
};

const displayProduct=(req,res) => {
    res.send("Display a Product");
};
const updateProduct=(req,res) => {
    res.send("Update a Product");
};
const deleteAllProducts=(req,res) => {
    res.send("Delete All Products");
};
const deleteProduct=(req,res) => {
    res.send("Delete a Product");
};



module.exports={displayAllProducts,displayProduct,addProduct,updateProduct,deleteAllProducts,deleteProduct};