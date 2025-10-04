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
    const [billing] = await db(TABLE).insert(billingData).returning("*");
    return billing;
  },

  updateBilling: async (id, billingData) => {
    const [billing] = await db(TABLE).where({ id }).update(billingData).returning("*");
    return billing;
  },

  deleteBilling: async (id) => {
    return await db(TABLE).where({ id }).del();
  },
};