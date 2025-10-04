const {
  createBilling,
  getAllBillings,
  billingById,
  updatedBilling,
  deletedBilling,
} = require("../../services/payments/billingServices");

exports.createBilling = async (req, res) => {
  try {
    const { order_id, billing_name, billing_email, billing_phone, billing_address } = req.body;
    const billing = await createBilling({ 
      order_id, 
      billing_name, 
      billing_email, 
      billing_phone, 
      billing_address 
    });
    return res.status(201).json({ success: true, message: "Billing record created", billing });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.getAllBillings = async (req, res) => {
  try {
    const billings = await getAllBillings();
    return res.status(200).json({ success: true, billings });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.getBillingById = async (req, res) => {
  try {
    const billing = await billingById(req.params.id);
    if (!billing) {
      return res.status(404).json({ success: false, message: "Billing record not found" });
    }
    return res.status(200).json({ success: true, billing });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.updateBilling = async (req, res) => {
  try {
    const { order_id, billing_name, billing_email, billing_phone, billing_address } = req.body;
    const billing = await updatedBilling(req.params.id, { 
      order_id, 
      billing_name, 
      billing_email, 
      billing_phone, 
      billing_address 
    });
    if (!billing) {
      return res.status(404).json({ success: false, message: "Billing record not found" });
    }
    return res.status(200).json({ success: true, message: "Billing record updated", billing });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.deleteBilling = async (req, res) => {
  try {
    const result = await deletedBilling(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Billing record not found" });
    }
    return res.status(200).json({ success: true, message: "Billing record deleted" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};