const express = require("express");
const billingControllers = require("../../controllers/payments/billingControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware");

const router = express.Router();

 router.post("/", authMiddleware, checkRole("create"), billingControllers.createBilling);
 router.get("/", authMiddleware, checkRole("view"), billingControllers.getAllBillings);
 router.get("/:id", authMiddleware, checkRole("view"), billingControllers.getBillingById);
 router.put("/:id", authMiddleware, checkRole("edit"), billingControllers.updateBilling);
 router.delete("/:id", authMiddleware, checkRole("delete"), billingControllers.deleteBilling);

module.exports = router;    