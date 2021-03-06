/* eslint-disable require-jsdoc */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('RoomModels', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    roomType: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    roomLabel: {
      type: Sequelize.STRING
    },
    hotelId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    roomImage: {
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('RoomModels');
}
