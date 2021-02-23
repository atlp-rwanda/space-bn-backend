module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('RoomModels', [
      {
        hotelId: 1,
        description: 'Room for VIP',
        roomType: 'Single Room',
        roomLabel: 'label 001',
        status: 'Available',
        price: '200$',
        roomImage: ['https://www.images.com/image.png'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hotelId: 1,
        description: 'Room for VIP',
        roomType: 'Single Room',
        roomLabel: 'label 001',
        status: 'Available',
        price: '400$',
        roomImage: ['https://www.images.com/image.png'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hotelId: 1,
        description: 'Room for VIP',
        roomType: 'Single Room',
        roomLabel: 'label 001',
        status: 'Available',
        price: '100$',
        roomImage: ['https://www.images.com/image.png'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RoomModels', null, {});
  }
};
