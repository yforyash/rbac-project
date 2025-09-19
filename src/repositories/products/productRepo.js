const db = require('../../config/dbConnection');
module.exports = {
    getAllProducts: async () => {
        return await db('product').select('*');
    },
    getProductById: async (id) => {
        return await db('product').where({ id }).first();
    },
    createProduct: async (productData) => {
        return await db('product').insert(productData).returning('*');
    },
    updateProduct: async (id, productData) => {
        return await db('product').where({ id }).update(productData);
    },
    deleteProduct: async (id) => {
        return await db('product').where({ id }).del();
    }
}