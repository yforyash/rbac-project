const express = require("express");
const productControllers = require("../controllers/productControllers");
const authMiddleware = require("../middleware/authMiddleware");
const checkRole = require("../middleware/rolesmiddleware");
const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  checkRole("create"),
  productControllers.createProduct
);
router.get(
  "/getAll",
  authMiddleware,
  checkRole("view"),
  productControllers.getAllProducts
);
router.get("/:id", authMiddleware, productControllers.getProductById);
router.put(
  "/:id",
  authMiddleware, // editor should be authenticated
  checkRole("edit"),// editor cannot edit
  productControllers.updateProduct
);
router.delete(
  "/:id",
  authMiddleware,
  checkRole("delete"),
  productControllers.deleteProduct
);

module.exports = router;
