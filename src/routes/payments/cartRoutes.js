const express = require("express");
const cartControllers = require("../../controllers/payments/cartControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware");

const router = express.Router();

router.post("/create", authMiddleware, checkRole("create"), cartControllers.createCart);
router.get("/getAll", authMiddleware, checkRole("view"), cartControllers.getAllCarts);
router.get("/:id", authMiddleware, checkRole("view"), cartControllers.getCartById);
router.put("/:id", authMiddleware, checkRole("edit"), cartControllers.updateCart);
router.delete("/:id", authMiddleware, checkRole("delete"), cartControllers.deleteCart);

module.exports = router;
