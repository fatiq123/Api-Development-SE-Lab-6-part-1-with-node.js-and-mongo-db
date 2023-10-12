const express = require('express');
const router = express.Router();
const productController = require('../controllers/productConroller');

router.post('/products', productController.createProduct);

module.exports = router;