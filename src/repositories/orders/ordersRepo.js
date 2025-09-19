const db = require("../../config/dbConnection");
const TABLE = "orders";

module.exports = {
  getAllOrders: async () => {
    return await db(TABLE).select("*");
  },

  getOrderById: async (id) => {
    return await db(TABLE).where({ id }).first();
  },

  createOrder: async (orderData) => {
    return await db(TABLE).insert(orderData).returning("*");
  },

  updateOrder: async (id, orderData) => {
    return await db(TABLE).where({ id }).update(orderData).returning("*");
  },

  deleteOrder: async (id) => {
    return await db(TABLE).where({ id }).del();
  },
};
