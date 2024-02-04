/* eslint-disable no-undef */
require('dotenv/config');

export const appConfiguration = {
  host: process.env.API_HOST || 'localhost',
  port: process.env.API_PORT || 3000,
};

// module.exports = appConfiguration;
