'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelName: {
        type: Sequelize.STRING
      },
      priceRange: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      ranking: {
        type: Sequelize.STRING
      },
      parking: {
        type: Sequelize.STRING
      },
      wifi: {
        type: Sequelize.STRING
      },
      swimmingPool: {
        type: Sequelize.STRING
      },
      breakfast: {
        type: Sequelize.STRING
      },
      rooms: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hotels');
  }
};
