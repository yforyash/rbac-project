const express = require("express");
const paymentControllers = require("../../controllers/payments/paymentControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware"); 

const router = express.Router();

router.post("/", authMiddleware, checkRole("create"), paymentControllers.createPayment);
router.get("/", authMiddleware, checkRole("view"), paymentControllers.getAllPayments);
router.get("/:id", authMiddleware, checkRole("view"), paymentControllers.getPaymentById);
router.put("/:id", authMiddleware, checkRole("edit"), paymentControllers.updatePayment);
router.delete("/:id", authMiddleware, checkRole("delete"), paymentControllers.deletePayment);

module.exports = router;