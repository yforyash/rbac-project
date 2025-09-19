const express = require("express");
const orderItemsControllers = require("../../controllers/orders/orderItemsControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware");

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  checkRole("create"),
  orderItemsControllers.createOrderItem
);

router.get(
  "/getAll",
  authMiddleware,
  checkRole("view"),
  orderItemsControllers.getAllOrderItems
);

router.get(
  "/:id",
  authMiddleware,
  checkRole("view"),
  orderItemsControllers.getOrderItemById
);

router.put(
  "/:id",
  authMiddleware,
  checkRole("edit"),
  orderItemsControllers.updateOrderItem
);

router.delete(
  "/:id",
  authMiddleware,
  checkRole("delete"),
  orderItemsControllers.deleteOrderItem
);

module.exports = router;
