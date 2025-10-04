const db = require("../../config/dbConnection");
const TABLE = "payments";

module.exports = {
  getAllPayments: async () => {
    return await db(TABLE).select("*");
  },

  getPaymentById: async (id) => {
    return await db(TABLE).where({ id }).first();
  },

  createPayment: async (paymentData) => {
    const [payment] = await db(TABLE).insert(paymentData).returning("*");
    return payment;
  },

  updatePayment: async (id, paymentData) => {
    const [payment] = await db(TABLE).where({ id }).update(paymentData).returning("*");
    return payment;
  },

  deletePayment: async (id) => {
    return await db(TABLE).where({ id }).del();
  },
};