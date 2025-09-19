const paymentRepo = require("../../repositories/payments/paymentRepo");

const createPayment = async (paymentData) => {
  return await paymentRepo.createPayment(paymentData);
};  
const getAllPayments = async () => {
  const payments = await paymentRepo.getAllPayments();
  return payments.length > 0 ? payments : [];
};

const paymentById = async (id) => {
  const payment = await paymentRepo.getPaymentById(id);
  if (!payment) throw new Error("Payment record not found");
  return payment;
};

const updatedPayment = async (id, paymentData) => {
  const existing = await paymentRepo.getPaymentById(id);
  if (!existing) throw new Error("Payment record not found");
  return await paymentRepo.updatePayment(id, paymentData);
};

const deletedPayment = async (id) => {
  const deleted = await paymentRepo.deletePayment(id);
  if (!deleted) throw new Error("Payment record not found");
  return { message: "Payment record deleted successfully" };
};

module.exports = {
  createPayment,
  getAllPayments,
  paymentById,
  updatedPayment,
  deletedPayment,
};  