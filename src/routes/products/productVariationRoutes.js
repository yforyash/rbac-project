const express = require("express");
const productVariationsControllers = require("../../controllers/products/productVariationsControllers")
const authMiddleware = require("../../middleware/authMiddleware");
const checkRole = require("../../middleware/rolesmiddleware");

const router = express.Router();

router.post("/", authMiddleware, checkRole("create"), productVariationsControllers.createProductVariation);
router.get("/", authMiddleware, checkRole("view"), productVariationsControllers.getAllProductVariations);
router.get("/:id", authMiddleware, checkRole("view"), productVariationsControllers.getProductVariationById);
router.get("/product/:productId", authMiddleware, checkRole("view"), productVariationsControllers.getVariantsByProductId);
router.put("/:id", authMiddleware, checkRole("edit"), productVariationsControllers.updateProductVariation);
router.delete("/:id", authMiddleware, checkRole("delete"), productVariationsControllers.deleteProductVariation);

module.exports = router;
