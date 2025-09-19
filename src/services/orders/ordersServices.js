const ordersRepo = require("../../repositories/orders/ordersRepo");

const createOrder = async (orderData) => {
  return await ordersRepo.createOrder(orderData);
};

const getAllOrders = async () => {
  const orders = await ordersRepo.getAllOrders();
  return orders.length > 0 ? orders : [];
};

const orderById = async (id) => {
  const order = await ordersRepo.getOrderById(id);
  if (!order) throw new Error("Order not found");
  return order;
};

const updatedOrder = async (id, orderData) => {
  const existing = await ordersRepo.getOrderById(id);
  if (!existing) throw new Error("Order not found");
  return await ordersRepo.updateOrder(id, orderData);
};

const deletedOrder = async (id) => {
  const deleted = await ordersRepo.deleteOrder(id);
  if (!deleted) throw new Error("Order not found");
  return { message: "Order deleted successfully" };
};

module.exports = {
  createOrder,
  getAllOrders,
  orderById,
  updatedOrder,
  deletedOrder,
};
