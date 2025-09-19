const db = require("../../config/dbConnection");

const TABLE = "product_variant";

module.exports = {
  getAllProductVariations: async () => {
    return await db(TABLE).select("*");
  },

  getProductVariationById: async (id) => {
    return await db(TABLE).where({ id }).first();
  },

  getVariationsByProductId: async (productId) => {
    return await db(TABLE).where({ product_id: productId });
  },

  createProductVariation: async (data) => {
    return await db(TABLE).insert(data).returning("*");
  },

  updateProductVariation: async (id, data) => {
    return await db(TABLE).where({ id }).update(data).returning("*");
  },

  deleteProductVariation: async (id) => {
    return await db(TABLE).where({ id }).del();
  },
};
