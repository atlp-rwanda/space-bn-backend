/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hotels",
      [
        {
          hotelname: "Gorillas Hotel",
          pricerange: "120",
          location: "Nyamagabe",
          coordinates: [-1.944880, 30.062380],
          ranking: "3",
          parking: "Yes",
          wifi: "Yes",
          swimmingpool: "no",
          breakfast: "Yes",
          image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          hotelemail: "Gorillas@yahoo.com",
          updatedAt: "2020-12-21T13:53:26.104Z",
          createdAt: "2020-12-21T13:53:26.104Z",
        },
        {
          hotelname: "Serena Hotel",
          pricerange: "120",
          location: "Kigali - Rwanda",
          coordinates: [-1.9448801, 30.0623801],
          ranking: "5",
          parking: "Yes",
          wifi: "Yes",
          swimmingpool: "no",
          breakfast: "Yes",
          image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          hotelemail: "serena@info.com",
          updatedAt: "2020-12-21T13:53:26.104Z",
          createdAt: "2020-12-21T13:53:26.104Z",
        },
        {
          hotelname: "Kigali Marriott Hotel",
          pricerange: "200",
          location: "Nyamagabe",
          coordinates: [-1.94488012, 30.062380011],
          ranking: "3",
          parking: "Yes",
          wifi: "Yes",
          swimmingpool: "no",
          breakfast: "Yes",
          image: "https://lh5.googleusercontent.com/p/AF1QipM-kpSMxYOFId0irOWK2h1uYvQXNidKX68EzgRj=w312-h192-p-k-no",
          hotelemail: "mariot@gmail.comm",
          updatedAt: "2020-12-21T13:53:26.104Z",
          createdAt: "2020-12-21T13:53:26.104Z",
        },
  
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hotels", null, {});
  },
};

