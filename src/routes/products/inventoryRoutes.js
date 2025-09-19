const express = require('express');
const inventoryControllers = require('../../controllers/products/inventoryControllers');
const authMiddleware = require('../../middleware/authMiddleware');
const checkRole = require('../../middleware/rolesmiddleware');     
const router = express.Router(); 

router.post('/create', authMiddleware, checkRole('create'), inventoryControllers.createInventory);
router.get('/getAll', authMiddleware, checkRole('view'), inventoryControllers.getAllInventories);
router.get('/:id', authMiddleware, checkRole('view'),inventoryControllers.getInventoryById);
router.put('/:id', authMiddleware, checkRole('edit'), inventoryControllers.updateInventory);        
router.delete('/:id', authMiddleware, checkRole('delete'), inventoryControllers.deleteInventory);

module.exports = router;
