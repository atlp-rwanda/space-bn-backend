'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('TrLocations', [
        {
        name: 'Nyamata',
        TravelRequestId: 1,
        arrivalTime: new Date(),
        departureTime: new Date(),
        accomodationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
        {
        name: 'Kigali ',
        TravelRequestId: 1,
        arrivalTime: new Date(),
        departureTime: new Date(),
        accomodationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
        {
        name: 'Gicumbi',
        TravelRequestId: 1,
        arrivalTime: new Date(),
        departureTime: new Date(),
        accomodationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('TrLocations', null, {});
     
  }
};
