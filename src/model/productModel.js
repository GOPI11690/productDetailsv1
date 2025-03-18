const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    productName: {
        type:String,
        required: true,
        maxLength:50,
    },
    price: {
        type:Number,
        required: true,
    },
    description: {
        type:String,
        required:true,
        maxLength:125
    },
    category: {
        type:String,
        maxLength:50,
    },
    rating: {
        type:Number,
    },   
})

module.exports = mongoose.model("products", productSchema);