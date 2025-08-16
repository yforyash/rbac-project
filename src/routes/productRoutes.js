const express = require('express');
const productControllers = require('../controllers/productControllers');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/rolesmiddleware');
const router = express.Router();

router.post('/create', authMiddleware, checkRole('admin', 'create'), productControllers.createProduct);
router.get('/getAll', authMiddleware, productControllers.getAllProducts);
router.get('/:id', authMiddleware, productControllers.getProductById);
router.put('/:id', authMiddleware, checkRole('admin', 'update'), productControllers.updateProduct);
router.delete('/:id', authMiddleware, checkRole('admin', 'delete'), productControllers.deleteProduct);

module.exports = router;