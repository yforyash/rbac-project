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
};
