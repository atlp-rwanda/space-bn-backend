'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Jane Mugisha',
        email: 'jane@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joshua Mahoro',
        email: 'joshua@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

