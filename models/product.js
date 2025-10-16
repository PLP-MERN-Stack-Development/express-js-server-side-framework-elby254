// import mongoose
const mongoose = require ('mongoose');

// Define schema(rules to follow to create collections aka tables in the DB)
const productSchema = new mongoose.Schema ({
    id:{type: Number, unique: true, required:true},
    name:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: Number, required: true},
    category:{type: String, required: true},
    instock:{type: Boolean, required: true},
}, {timestamps: true});


// create the model( represents the collections aka tables)
const product = mongoose.model("product", productSchema)

module.exports = product;