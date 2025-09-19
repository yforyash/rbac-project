const inventoryRepo = require("../../repositories/products/inventoryRepo");

const createInventory = async (inventoryData) => {
  const newInventory = await inventoryRepo.createInventory(inventoryData);
  return newInventory;
};

const getAllInventory = async () => {
  const inventory = await inventoryRepo.getAllInventory();
  if (inventory.length >= 0) {
    return inventory;
  }
  return [];
};

const inventoryById = async (id) => {
  const inventory = await inventoryRepo.getInventoryById(id);
  if (!inventory) {
    throw new Error("Inventory not found");
  }
  return inventory;
};

const updatedInventory = async (id, inventoryData) => {
  const checkInventory = await inventoryRepo.getInventoryById(id);
  if (!checkInventory) {
    throw new Error("Inventory not found");
  }
  const updatedInventory = await inventoryRepo.updateInventory(id, inventoryData);
  return updatedInventory;
};

const deletedInventory = async (id) => {
  const deleted = await inventoryRepo.deleteInventory(id);
  if (!deleted) {
    throw new Error("Inventory not found");
  }
  return { message: "Inventory deleted successfully" };
};

module.exports = {
  createInventory,
  getAllInventory,
  inventoryById,
  updatedInventory,
  deletedInventory,
};
