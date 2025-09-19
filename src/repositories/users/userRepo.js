const db = require('../../config/dbConnection');

module.exports = {
    getAllUsers: async () => {
        return await db('users').select('*');
    },
    getUserById: async (id) => {
        return await db('users').where({ id }).first();
    },
    getUserByEmail: async (email) => {
        return await db('users').where({ email }).first();
    },
    createUser: async (userData) => {
        return await db('users').insert(userData).returning('*');
    },
    updateUser: async (id, userData) => {
        return await db('users').where({ id }).update(userData);
    },
    deleteUser: async (id) => {
        return await db('users').where({ id }).del();
    },
    getAllRoles: async () => {
        return await db('roles').select('*');
    },
    getRoleById: async (id) => {
        return await db('roles').where({ id }).first();
    },
    createRole: async (roleData) => {
        return await db('roles').insert(roleData).returning('*');
    },
    deleteRole: async (id) => {
        return await db('roles').where({ id }).delete();
    }
};