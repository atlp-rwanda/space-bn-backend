module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstname: 'Kabano',
      lastname: 'Gilles',
      telephone: '',
      email: 'gilleskaba@gmail.com',
      password: '1234567$#8',
      gender: 'Male',
      origin: '',
      age: 25,
      roleId: 2,
      identification_type: '',
      identification_number: '',
      user_image: 'https://res.cloudinary.com/samuelnayo/image/upload/v1613915506/k0bl3tldlrh6ryhql1mb.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
