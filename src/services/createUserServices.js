const bcrypt = require('bcryptjs');
const userRepo = require('../repositories/userRepo');

const createUsers = async (userData) => {
  const checkExistingUser = await userRepo.getUserByEmail(userData.email);
  if (checkExistingUser) throw new Error("Account Already Exist");
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const [newUser] = await userRepo.createUser({ name: userData.name, email: userData.email, password: hashedPassword });
  return newUser;
};

module.exports = {
  createUsers
};