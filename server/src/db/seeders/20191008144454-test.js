'use strict';

const { encrypt } = require('../../common/passwordEncrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await encrypt('admin')
    const localAdmin = {
      name: 'Admin',
      email: 'admin@admin.com',
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await queryInterface.bulkInsert('Users', [localAdmin])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', { email: 'admin@admin.com' });
  }
};
