'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('TravelRequests', [{
       requesterId: 6,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('TravelRequests', null, {});
  }
};
