/* eslint-disable no-undef */
require('dotenv/config');

const databaseCredentials = {
  development: {
    dialect: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
  },
  test: {
    dialect: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
  },
  production: {
    dialect: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
  },
};

module.exports = databaseCredentials;
