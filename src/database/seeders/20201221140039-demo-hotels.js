/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('hotels', [{
      hotelname: 'Gorillas Hotel',
      location: 'Kigali',
      coordinates: [2.3845, 29.4644],
      pricerange: '$120 - $180',
      ranking: 3,
      swimmingpool: 'Pool',
      wifi: 'Free Wifi',
      parking: 'Free parking',
      breakfast: 'Free breakfast',
      hotelemail: 'infos@gorillas.com',
      image: 'https://res.cloudinary.com/samuelnayo/image/upload/v1613907526/uk7dcu7f0ka0bdcx6u0z.jpg',
      updatedAt: new Date(),
      createdAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hotels', null, {});
  }
};
