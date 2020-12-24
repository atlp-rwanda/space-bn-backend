'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Users', [{
        firstname: 'Kabano',
        lastname: 'Gilles',
        telephone: '',
        email: 'gilleskaba@gmail.com',
        password: '1234567$#8',
        role: 'Nomad',
        gender: 'Male',
        origin: '',
        profession: '',
        age: 25,
        identification_type: '',
        identification_number: '',
        user_image: '',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
