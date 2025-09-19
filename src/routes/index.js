const express = require('express');
const router = express.Router();

const productRoutes = require('./products/productRoutes');
const catalogRoutes = require('./products/catalogRoutes');
const inventoryRoutes = require('./products/inventoryRoutes');
const productVariationRoutes = require('./products/productVariationRoutes');

const orderRoutes = require('./orders/ordersRoutes');
const orderItemsRoutes = require('./orders/orderItemsRoutes');

const billingRoutes = require('./payments/billingRoutes');
const cartRoutes = require('./payments/cartRoutes');
const paymentRoutes = require('./payments/paymentRoutes');

const userRoutes = require('./user/userRoutes');

router.use('/products', productRoutes);
router.use('/catalog', catalogRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/variations', productVariationRoutes);

router.use('/orders', orderRoutes);
router.use('/order-items', orderItemsRoutes);

router.use('/billing', billingRoutes);
router.use('/cart', cartRoutes);
router.use('/payments', paymentRoutes);

router.use('/users', userRoutes);

module.exports = router;
