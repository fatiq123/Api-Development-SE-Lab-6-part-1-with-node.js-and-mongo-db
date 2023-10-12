const product = require('../models/product');

async function createProduct(req, res) {
    try {
        const products = await product.create(req.body);
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createProduct
}