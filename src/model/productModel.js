const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    productName: {
        type:String,
        required: true,
        maxLength:50,
    },
    price: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required:true,
        maxLength:125
    },
    category: String,
    rating: {
        type:String,
    },   
})

module.exports = mongoose.model("products", productSchema);