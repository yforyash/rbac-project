const {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} = require("../../services/orders/orderItemsServices");

exports.createOrderItem = async (req, res) => {
  try {
    const { order_id, product_code, quantity, price } = req.body;
    const orderItem = await createOrderItem({ order_id, product_code, quantity, price });
    return res.status(201).json({
      success: true,
      message: "Order item created successfully",
      orderItem,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await getOrderItemById(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ success: false, message: "Order item not found" });
    }
    return res.status(200).json({ success: true, orderItem });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await getAllOrderItems();
    if (orderItems.length === 0) {
      return res.status(404).json({ success: false, message: "No order items found" });
    }
    return res.status(200).json({ success: true, orderItems });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const orderItem = await updateOrderItem(req.params.id, { order_id, product_id, quantity, price });
    if (!orderItem) {
      return res.status(404).json({ success: false, message: "Order item not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Order item updated successfully",
      orderItem,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await deleteOrderItem(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ success: false, message: "Order item not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Order item deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
  }
};
