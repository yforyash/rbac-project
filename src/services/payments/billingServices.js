const billingRepo = require("../../repositories/payments/billingRepo");

const createBilling = async (billingData) => {
  return await billingRepo.createBilling(billingData);
};

const getAllBillings = async () => {
  const billings = await billingRepo.getAllBillings();
  return billings.length > 0 ? billings : [];
};

const billingById = async (id) => {
  const billing = await billingRepo.getBillingById(id);
  if (!billing) throw new Error("Billing record not found");
  return billing;
};

const updatedBilling = async (id, billingData) => {
  const existing = await billingRepo.getBillingById(id);
  if (!existing) throw new Error("Billing record not found");
  return await billingRepo.updateBilling(id, billingData);
};

const deletedBilling = async (id) => {
  const deleted = await billingRepo.deleteBilling(id);
  if (!deleted) throw new Error("Billing record not found");
  return { message: "Billing record deleted successfully" };
};

module.exports = {
  createBilling,
  getAllBillings,
  billingById,
  updatedBilling,
  deletedBilling,
};