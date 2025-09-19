const db = require("../../config/dbConnection");

module.exports = {
  getAllInventory: async () => {
    return await db("inventory").select("*");
  },
  getInventoryById: async (id) => {
    return await db("inventory").where({ id }).first();
  },
  createInventory: async (inventoryData) => {
    return await db("inventory").insert(inventoryData).returning("*");
  },
  updateInventory: async (id, inventoryData) => {
    return await db("inventory")
      .where({ id })
      .update(inventoryData)
      .returning("*");
  },
  deleteInventory: async (id) => {
    return await db("inventory").where({ id }).del();
  },
};
