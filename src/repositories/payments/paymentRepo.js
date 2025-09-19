const db = require("../../config/dbConnection");
const TABLE = "billing";

module.exports = {
  getAllBillings: async () => {
    return await db(TABLE).select("*");
  },

  getBillingById: async (id) => {
    return await db(TABLE).where({ id }).first();
  },

  createBilling: async (billingData) => {
    return await db(TABLE).insert(billingData).returning("*");
  },
  updateBilling: async (id, billingData) => {
    return await db(TABLE).where({ id }).update(billingData).returning("*");
  },

  deleteBilling: async (id) => {
    return await db(TABLE).where({ id }).del();
  },
};
