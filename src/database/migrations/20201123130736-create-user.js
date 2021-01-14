<<<<<<< HEAD
<<<<<<< HEAD:src/database/migrations/20201123130736-create-user.js
=======
>>>>>>> Making tests run
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('exampleTable', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
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
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Users');
<<<<<<< HEAD
}
=======
>>>>>>> no-edit:src/database/migrations/20201203144012-create-nomad.js
=======
}
>>>>>>> Making tests run
