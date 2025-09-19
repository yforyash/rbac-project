const {
  createProductVariation,
  getAllProductVariations,
  getProductVariationById,
  getVariationsByProductId,
  updateProductVariation,
  deleteProductVariation,
} = require("../../services/products/productVariationServices");
const { productById } = require("../../services/products/productService");


exports.createProductVariation = async (req, res) => {
  try {
    const { product_id, variant_name, additional_price, stock } = req.body;

   
    const product = await productById(product_id);
    if (!product) {
      return res.status(400).json({ success: false, message: "Associated product not found" });
    }

    const variation = await createProductVariation({ product_id, variant_name, additional_price, stock });
    return res.status(201).json({ success: true, message: "Product variation created", variation });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


exports.getAllProductVariations = async (req, res) => {
  try {
    const variations = await getAllProductVariations();
    return res.status(200).json({ success: true, variations });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


exports.getProductVariationById = async (req, res) => {
  try {
    const variation = await getProductVariationById(req.params.id);
    if (!variation) return res.status(404).json({ success: false, message: "Not found" });
    return res.status(200).json({ success: true, variation });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


exports.getVariantsByProductId = async (req, res) => {
  try {
    const variations = await getVariationsByProductId(req.params.productId);
    return res.status(200).json({ success: true, variations });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


exports.updateProductVariation = async (req, res) => {
  try {
    const updated = await updateProductVariation(req.params.id, req.body);
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });
    return res.status(200).json({ success: true, message: "Updated successfully", variation: updated });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


exports.deleteProductVariation = async (req, res) => {
  try {
    const deleted = await deleteProductVariation(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    return res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
