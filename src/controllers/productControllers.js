const db = require('../config/dbConnection');

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const [product] = await db('products').insert({ name, price, description }).returning('*');
        return res.status(201).json({ success: true, message: "Product created successfully", product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Something went wrong on our side" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await db('products').where({ id: req.params.id }).first();
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Something went wrong on our side" });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await db('products').select('*');
        if (products.length === 0) {
            return res.status(404).json({ success: false, message: "No products found" });
        }
        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Something went wrong on our side" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const [product] = await db('products')
            .where({ id: req.params.id })
            .update({ name, price, description })
            .returning('*');
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, message: "Product updated successfully", product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Something went wrong on our side" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await db('products').where({ id: req.params.id }).del();
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Something went wrong on our side" });
    }
};