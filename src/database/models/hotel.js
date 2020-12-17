
module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define('hotel',{
    hotelName: DataTypes.STRING,
    priceRange: DataTypes.STRING,
    location: DataTypes.STRING,
    ranking: DataTypes.STRING,
    parking: DataTypes.STRING,
    wifi: DataTypes.STRING,
    swimmingPool: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    rooms: DataTypes.ARRAY(DataTypes.STRING)
  },
  {
   sequelize,
   modelName: 'hotel',
   onUpdate: 'CASCADE',
   onDelete: 'CASCADE'
 });

 hotel.associate = (models) => {
  hotel.hasMany(models.roommodel, {
    foreignKey: 'hotelId',
   })
 };
  
   return hotel;
 };

 /*
 "hotelName": "creado",
    "priceRange": "200$-300$",
    "location": "huye",
    "ranking": "3 stars",
    "parking": " 3 parking vip",
    "wifi": "4G",
    "swimmingPool": " 2 swimmingPool",
    "breakfast": "Pizza",
    "rooms": ["double room","single room"]
  */

  /*
  "roomType": "double",
    "description": "room with double birds",
    "roomLabel": "RD",
    "hotelId": 2,
    "status": "pending",
    "price": "500$"
   */