'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [{

      userId:1,
      requestId: 2,
      comment:
        "test seeds.....",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Comments', null, {});
   
  }
};
