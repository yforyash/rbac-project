const {
  createPayment,
  getAllPayments,
  paymentById,
  updatedPayment,
  deletedPayment,
} = require("../../services/payments/paymentServices");

exports.createPayment = async (req, res) => {
  try {
    const { user_id, amount, payment_date, method, status } = req.body;
    const payment = await createPayment({
      user_id,
      amount,
      payment_date,
      method,
      status,
    });
    return res
      .status(201)
      .json({ success: true, message: "Payment record created", payment });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await getAllPayments();
    return res.status(200).json({ success: true, payments });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await paymentById(req.params.id);
    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment record not found" });
    }
    return res.status(200).json({ success: true, payment });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const { user_id, amount, payment_date, method, status } = req.body;
    const payment = await updatedPayment(req.params.id, {
      user_id,
      amount,
      payment_date,
      method,
      status,
    });
    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment record not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Payment record updated", payment });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const result = await deletedPayment(req.params.id);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Payment record not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Payment record deleted", result });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
