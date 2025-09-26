require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      database: process.env.DATABASE,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'db', 'migrations'), 
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'db', 'seeds'), 
    },
  },
};
