const productRepo = require('../repositories/productRepo');


    const createdProduct = async (productData) => {
    const newProduct = await productRepo.createProduct(productData);
    return newProduct;
}
const getAllProduct = async () => {
    const products = await productRepo.getAllProducts()
    if(products.length >=0 ){
        return products;
    }
    return [];
}
const productById = async(id) => {
    const product = await productRepo.getProductById(id);
    if(!product){
        throw new Error("Product not found");
    }
    return product;
}
const updatedProduct = async (id, productData) => {
    const checkProduct = await productRepo.getProductById(id);
    if(!checkProduct){
        throw new Error("Product not found");
    }
    const updatedProduct = await productRepo.updateProduct(id, productData);
    return updatedProduct;
}
const deletedProduct = async (id) => {
    const deleted = await productRepo.deleteProduct(id);
    if(!deleted){
        throw new Error("Product not found");
    }
    return {message: "Product deleted successfully"};
}
module.exports = {
    createdProduct,
    getAllProduct,
    productById,
    updatedProduct,
    deletedProduct
}
