/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';
const { faker } = require('@faker-js/faker');

const baseProductSeeder = () => {
  const productsSeeds = [];

  for (let i = 0; i < 100; i++) {
    productsSeeds.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 50 }),
      brand: faker.company.name(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return productsSeeds;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Products', baseProductSeeder(), {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
