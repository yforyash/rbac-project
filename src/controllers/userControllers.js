const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUsers, getAllUsers, getUserById, deleteUser } = require("../services/createUserServices");

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await createUsers({ name, email, password });
        if (!user) {
            return res.json({ success: false, message: "Error creating account." });
        }
        return res.json({ success: true, message: "Account created successfully." });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message || "Something went wrong on our side." });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getAllUsers().then(users => users.find(u => u.email === email));
        if (!user) {
            return res.json({ success: false, message: "Account not found." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Incorrect password." });
        }
        const data = { id: user.id, role: user.role };
        const token = jwt.sign(data, process.env.JWT_SECRET);
        return res.json({ success: true, message: "Logged in successfully.", token });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message || "Something went wrong on our side." });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        return res.json({ success: true, users });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message || "Something went wrong on our side." });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await getUserById(req.user.id);
        if (!user) {
            return res.json({ success: false, message: "User not found." });
        }
        return res.json({ success: true, user });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message || "Something went wrong on our side." });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleted = await deleteUser(req.params.id);
        if (!deleted) {
            return res.json({ success: false, message: "User not found or already deleted." });
        }
        return res.json({ success: true, message: "User deleted successfully." });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message || "Something went wrong on our side." });
    }
};