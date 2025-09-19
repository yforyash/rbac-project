

const {
  getAllProduct,
  productById,
  createdProduct,
  updatedProduct,
  deletedProduct,
} = require("../../services/products/productService");

exports.createProduct = async (req,res)=> {
  try {
    const { catalog_id,product_name,price,product_code} = req.body;
    const productData = { catalog_id,product_name,price,product_code};
    const product = await createdProduct(productData);
    return res.status(200).json({ success: true , message:'created successfuly'})
  }
  catch(error){
    console.log(error.message);
    return res.status(500).json({ success: false , message:'Something went wrong on our side'});
  }
}

exports.getProductById = async (req,res) => {
  try {
    const product = await productById(req.params.id);
    if(!product) {
      return res.status(500).json({ success: fail , message: 'error'})
    }
    return res.status(200).json({ success: true, message:'product extracted successfully',product});
  }
  catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our side" });
}
}
exports.getAllProducts = async (req, res) => {
  try {
    const products = await getAllProduct();
    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    }
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { catalog_id, product_name, price, product_code } = req.body;
    const productData = {  catalog_id, product_name, price, product_code };
    const product = await updatedProduct(id, productData);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await deletedProduct(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};
