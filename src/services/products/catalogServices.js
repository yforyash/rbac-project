const catalogRepo = require("../../repositories/products/catalogRepo");

const createCatalog = async (catalogData) => {
  const newCatalog = await catalogRepo.createCatalog(catalogData);
  return newCatalog;
};

const getAllCatalog = async () => {
  const catalogs = await catalogRepo.getAllCatalog();
  if (catalogs.length >= 0) {
    return catalogs;
  }
  return [];
};

const catalogById = async (id) => {
  const catalog = await catalogRepo.getCatalogById(id);
  if (!catalog) {
    throw new Error("Catalog not found");
  }
  return catalog;
};

const updatedCatalog = async (id, catalogData) => {
  const checkCatalog = await catalogRepo.getCatalogById(id);
  if (!checkCatalog) {
    throw new Error("Catalog not found");
  }
  const updatedCatalog = await catalogRepo.updateCatalog(id, catalogData);
  return updatedCatalog;
};

const deletedCatalog = async (id) => {
  const deleted = await catalogRepo.deleteCatalog(id);
  if (!deleted) {
    throw new Error("Catalog not found");
  }
  return { message: "Catalog deleted successfully" };
};

module.exports = {
  createCatalog,
  getAllCatalog,
  catalogById,
  updatedCatalog,
  deletedCatalog,
};
