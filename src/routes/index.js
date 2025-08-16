const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const authMiddleware = require('../middleware/authMiddleware');
router.use('/product', productRoutes);
router.use('/user',userRoutes);
module.exports = router;