export function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Nomads',
      [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jon Doe',
          email: 'jondoe@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  }
  export function down(queryInterface, Sequelize) { return queryInterface.bulkDelete('Nomads', null, {}); }
  