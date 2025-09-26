const ordersRepo = require("../../repositories/orders/ordersRepo");
const cartRepo = require("../../repositories/payments/cartRepo");
const orderItemsRepo = require("../../repositories/orders/orderItemsRepo");

const createOrder = async (orderData) => {
  return await ordersRepo.createOrder(orderData);
};

const createOrderFromCart = async (userId) => {
  const cartItems = await cartRepo.getCartWithTotalByUserId(userId);
  if (!cartItems || cartItems.length === 0) throw new Error("Cart is empty");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [order] = await ordersRepo.createOrder({
    user_id: userId,
    total_amount: total,
    status: "pending",
  });

  for (const item of cartItems) {
    await orderItemsRepo.addOrderItem({
      order_id: order.id,
      product_variant_id: item.variant_id,
      quantity: item.quantity,
      price: item.price,
    });
  }

  return order;
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
  createOrderFromCart,
  getAllOrders,
  orderById,
  updatedOrder,
  deletedOrder,
};
