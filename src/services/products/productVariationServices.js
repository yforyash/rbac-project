const productVariationRepo = require("../../repositories/products/productVariationRepo");

const createProductVariation = async (data) => {
  return await productVariationRepo.createProductVariation(data);
};

const getAllProductVariations = async () => {
  return await productVariationRepo.getAllProductVariations();
};

const getProductVariationById = async (id) => {
  return await productVariationRepo.getProductVariationById(id);
};

const getVariationsByProductId = async (productId) => {
  return await productVariationRepo.getVariationsByProductId(productId);
};

const updateProductVariation = async (id, data) => {
  return await productVariationRepo.updateProductVariation(id, data);
};

const deleteProductVariation = async (id) => {
  return await productVariationRepo.deleteProductVariation(id);
};

module.exports = {
  createProductVariation,
  getAllProductVariations,
  getProductVariationById,
  getVariationsByProductId,
  updateProductVariation,
  deleteProductVariation,
};
