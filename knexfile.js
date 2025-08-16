require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      database: process.env.DATABASE,
      password: process.env.DB_PASSWORD,
      // ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: './src/db/migrations',
    },
  },
};