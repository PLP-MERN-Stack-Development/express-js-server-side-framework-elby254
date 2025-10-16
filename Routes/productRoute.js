// importing express
const express = require ('express');
const router = express.Router();
const product = require('../models/product');

//CRUD OPERATIONS
// GET all products(fetch all)
router.get("/", async (req, res) => {
    try {
        const product = await product.find();
        res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


// find a product by id
router.get("/:id", async (req, res) => {
    try {
        const productData = await product.findById(req.params.id);
        res.json(productData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// create a new product
router.post("/", async(req, res) =>{
    const {name, description, price, category, instock} = req.body
    try {
        const product = new Product({name, description, price, category, instock});
        const saved = await product.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(400).json({ message:error.message})
    }
});


// update a product by id 
router.put ("/:id", async(req, res) =>{
    try {
        const product = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(student);
    } catch (error) {
        res.status(400).json({ message:error.message});
    }
});

// Delete a product by id 
router.delete ("/:id", async(req, res) =>{
    try {
        await product.findByIdAndDelete(
            req.params.id
        );
        res.json({ message: "product Deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;