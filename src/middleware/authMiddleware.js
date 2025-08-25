const jwt = require('jsonwebtoken');
const { getUserByEmailService } = require('../services/loginUserService');
const loginUserService = require('../services/loginUserService').loginUserService;
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'You need to login first (no token found).' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token missing from the header.' });
  }
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
   console.log("userData", userData);
   
    const user =  getUserByEmailService(userData.email);
    if(!user) {
      return res.status(402).json({ message:"user not found"});
    }
     req.user = {
      id:userData.id,
      role:userData.role,
      token: token
    };
    
    next(); 
  } catch (err) {
    return res.status(401).json({ message: 'Oops! Your token is invalid or expired.' });
  }
}
module.exports = authMiddleware;
