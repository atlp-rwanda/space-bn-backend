module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sampleModels', [{
      name: 'Furebo',
      tel: '0788934556',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jemima',
      tel: '0788931111',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Leny',
      tel: '0788936000',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sampleModels', null, {});
  }
};
