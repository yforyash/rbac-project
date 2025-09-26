const {
  createOrder,
  getAllOrders,
  orderById,
  updatedOrder,
  deletedOrder,
  createOrderFromCart,
} = require("../../services/orders/ordersServices");

exports.createOrder = async (req, res) => {
  try {
    const {user_id, total_amount, status } = req.body;
    const order = await createOrder({user_id, total_amount, status });
    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.createOrderFromCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    const order = await createOrderFromCart(user_id);
    return res.status(201).json({
      success: true,
      message: "Order created from cart successfully",
      order,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderById(req.params.id);
    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    if (orders.length === 0) {
      return res.status(404).json({ success: false, message: "No orders found" });
    }
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { user_id, total_amount, status } = req.body;
    const order = await updatedOrder(req.params.id, { user_id, total_amount, status });
    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const result = await deletedOrder(req.params.id);
    return res.status(200).json({ success: true, message: result.message });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};
