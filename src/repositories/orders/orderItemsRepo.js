const db = require("../../config/dbConnection");

module.exports = {
  getAllOrderItems: async () => {
    return await db("order_items").select("*");
  },

  getOrderItemById: async (id) => {
    return await db("order_items").where({ id }).first();
  },

  addOrderItem: async (orderItemData) => {
    return await db("order_items").insert(orderItemData).returning("*");
  },

  updateOrderItem: async (id, orderItemData) => {
    return await db("order_items")
      .where({ id })
      .update(orderItemData)
      .returning("*");
  },

  deleteOrderItem: async (id) => {
    return await db("order_items").where({ id }).del();
  },
};
