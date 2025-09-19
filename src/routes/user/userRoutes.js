const express = require("express");
const userControllers = require("../../controllers/user/userControllers");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/get/details", authMiddleware, userControllers.getUser);
router.get("/get/all", userControllers.getAllUsers);
router.post("/create", userControllers.createUser);
router.post("/login", userControllers.loginUser);
router.get("/delete/:id", userControllers.deleteUser);

module.exports = router;