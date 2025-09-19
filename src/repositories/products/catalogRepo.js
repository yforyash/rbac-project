const db = require("../../config/dbConnection");
module.exports = {
    getAllCatalog: async () => {
        return await db('catalog').select('*');
    },
    getCatalogById: async (id) => {
        return await db('catalog').where({ id }).first();
    },
    createCatalog: async (catalogData) => {
        return await db('catalog').insert(catalogData);
    },
    updateCatalog: async (id, catalogData) => {
        return await db('catalog').where({ id }).update(catalogData);
    },
    deleteCatalog: async (id) => {
        return await db('catalog').where({ id }).del();
    }
}