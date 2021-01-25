/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userRoles', [{
      name: process.env.ADMIN_ROLE_NAME,
      description: process.env.ADMIN_ROLE_DESCRIPTION,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TRAVEL_ADMIN",
      description: "TRAVEL_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userRoles', null, {});
  }
};
