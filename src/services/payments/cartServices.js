const cartRepo = require("../../repositories/payments/cartRepo");

const createCart = async (cartData) => {
  return await cartRepo.createCart(cartData);
};

const getAllCarts = async () => {
  const carts = await cartRepo.getAllCarts();
  return carts.length > 0 ? carts : [];
};

const cartById = async (id) => {
  const cart = await cartRepo.getCartById(id);
  if (!cart) throw new Error("Cart item not found");
  return cart;
};

const updatedCart = async (id, cartData) => {
  const existing = await cartRepo.getCartById(id);
  if (!existing) throw new Error("Cart item not found");
  return await cartRepo.updateCart(id, cartData);
};

const deletedCart = async (id) => {
  const deleted = await cartRepo.deleteCart(id);
  if (!deleted) throw new Error("Cart item not found");
  return { message: "Cart item deleted successfully" };
};

const checkoutCart = async (userId) => {
  const items = await cartRepo.getCartWithTotalByUserId(userId);
  if (!items || items.length === 0) throw new Error("Cart is empty");

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    userId,
    items,
    totalAmount,
  };
};

module.exports = {
  createCart,
  getAllCarts,
  cartById,
  updatedCart,
  deletedCart,
  checkoutCart,
};
