'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('accomodations', [
      {
      hotelId: 1,
      roomId: 1,
      createdAt: new Date(),
       updatedAt: new Date()
    },
      {
      hotelId: 1,
      roomId: 2,
      createdAt: new Date(),
       updatedAt: new Date()
    },
      {
      hotelId: 1,
      roomId: 3,
      createdAt: new Date(),
       updatedAt: new Date()
    },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('accomodations', null, {});
 
  }
};
