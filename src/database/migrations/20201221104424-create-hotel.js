/* eslint-disable require-jsdoc */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('hotels', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: false,
      type: Sequelize.INTEGER
    },
    hotelname: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    coordinates: {
      type: Sequelize.ARRAY(Sequelize.FLOAT)
    },
    pricerange: {
      type: Sequelize.STRING
    },
    ranking: {
      type: Sequelize.STRING
    },
    swimmingpool: {
      type: Sequelize.STRING
    },
    wifi: {
      type: Sequelize.STRING
    },
    parking: {
      type: Sequelize.STRING
    },
    breakfast: {
      type: Sequelize.STRING
    },
    hotelemail: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
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
}
// eslint-disable-next-line no-unused-vars
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('hotels');
}
