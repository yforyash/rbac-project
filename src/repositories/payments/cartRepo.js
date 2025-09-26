const db = require("../../config/dbConnection");
const TABLE = "cart";

module.exports = {
  getAllCarts: async () => {
    return await db(TABLE).select("*");
  },

  getCartById: async (id) => {
    return await db(TABLE).where({ id }).first();
  },

  createCart: async (cartData) => {
    return await db(TABLE).insert(cartData).returning("*");
  },

  updateCart: async (id, cartData) => {
    return await db(TABLE).where({ id }).update(cartData).returning("*");
  },

  deleteCart: async (id) => {
    return await db(TABLE).where({ id }).del();
  },

  getCartWithTotalByUserId: async (userId) => {
    return await db(TABLE)
      .join("product_variants", "cart.product_variant_id", "product_variants.id")
      .select(
        "cart.id as cart_id",
        "cart.quantity",
        "product_variants.id as variant_id",
        "product_variants.price"
      )
      .where("cart.user_id", userId);
  },
};
