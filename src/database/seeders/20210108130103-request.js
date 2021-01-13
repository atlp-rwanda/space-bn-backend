'use strict';

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'requests',
    [
      {
        idUser: 4,
        dateStart: '2020-11-30',
        dateEnd: '2021-01-10',
        idRoom:9,
        requestStatus:'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) { return queryInterface.bulkDelete('requests', null, {}); }
