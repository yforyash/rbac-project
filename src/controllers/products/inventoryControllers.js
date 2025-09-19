const {
  createInventory,
  getAllInventory,
  inventoryById,
  updatedInventory,
  deletedInventory,
} = require("../../services/products/inventoryServices");

exports.createInventory = async (req, res) => {
  try {
    const { product_id, variant_id, quantity} = req.body;
    const inventory = await createInventory({ product_id, variant_id, quantity });
    return res.status(201).json({
      success: true,
      message: "Inventory created successfully",
      inventory,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getInventoryById = async (req, res) => {
  try {
    const inventory = await inventoryById(req.params.id);
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, message: "Inventory not found" });
    }
    return res.status(200).json({ success: true, inventory });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await getAllInventory();
    if (inventories.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No inventories found" });
    }
    return res.status(200).json({ success: true, inventories });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const { product_id, quantity, location } = req.body;
    const inventory = await updatedInventory(req.params.id, {
      product_id,
      quantity,
      location,
    });
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, message: "Inventory not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Inventory updated successfully",
      inventory,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await deletedInventory(req.params.id);
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, message: "Inventory not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Inventory deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};
