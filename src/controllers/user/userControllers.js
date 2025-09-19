const bcrypt = require("bcryptjs");

const {
  createUsers,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../../services/user/createUserServices");
const { loginUserService } = require("../../services/user/loginUserService");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    const user = await createUsers({ name, email, password, role }); 
    if (!user) {
      return res.json({ success: false, message: "Error creating account." });
    }
    return res.json({
      success: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: error.message || "Something went wrong on our side.",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUserService(email, password);
console.log("user details", user);

    return res.json({
      success: true,
      message: "Logged in successfully.",
      data: user.token
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: error.message || "Something went wrong on our side.",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json({ success: true, users });
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: error.message || "Something went wrong on our side.",
    });
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
    return res.json({
      success: false,
      message: error.message || "Something went wrong on our side.",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await deleteUser(req.params.id);
    if (!deleted) {
      return res.json({
        success: false,
        message: "User not found or already deleted.",
      });
    }
    return res.json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: error.message || "Something went wrong on our side.",
    });
  }
};
