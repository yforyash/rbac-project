  const express = require("express");
  const productControllers = require("../../controllers/products/productControllers");
  const authMiddleware = require("../../middleware/authMiddleware");
  const checkRole = require("../../middleware/rolesmiddleware");
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
  router.get(
    "/:id",
    authMiddleware,
    checkRole("view"),
    productControllers.getProductById
  );
  router.put(
    "/:id",
    authMiddleware,
    checkRole("edit"),
    productControllers.updateProduct
  );
  router.delete(
    "/:id",
    authMiddleware,
    checkRole("delete"),
    productControllers.deleteProduct
  );

  module.exports = router;
