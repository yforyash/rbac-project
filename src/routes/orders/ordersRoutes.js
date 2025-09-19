const express = require("express");
const ordersControllers = require("../../controllers/orders/ordersControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware");

const router = express.Router();

router.post("/create", authMiddleware, checkRole("create"), ordersControllers.createOrder);
router.get("/getAll", authMiddleware, checkRole("view"), ordersControllers.getAllOrders);
router.get("/:id", authMiddleware, checkRole("view"), ordersControllers.getOrderById);
router.put("/:id", authMiddleware, checkRole("edit"), ordersControllers.updateOrder);
router.delete("/:id", authMiddleware, checkRole("delete"), ordersControllers.deleteOrder);

module.exports = router;
