'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('roomModels', [{
        hotelId:"001",
        description:"Room for VIP",
        roomType:"first class",
        roomLabel:"label 001",
        status:"double",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('roomModels', null, {});
     
  }
};
