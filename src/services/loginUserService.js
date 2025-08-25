//email, password,
// 
const bcrypt = require('bcryptjs');
const userRepo = require('../repositories/userRepo');
const jwt = require("jsonwebtoken");
exports.loginUserService = async (email , password) => {
    const user = await userRepo.getUserByEmail(email);
    if(!user) {
        throw new Error("account not found");
    }
    console.log("user details", user);
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new Error("incorrect password");
    }
    const data = { id: user.id, role: user.role, email: user.email, name: user.name };
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    return {token};
}

exports.getUserByEmailService = async (email) => {
    const user = await userRepo.getUserByEmail(email);
    if(!user) {
        throw new Error("account not found");
    }
    return user;
}
