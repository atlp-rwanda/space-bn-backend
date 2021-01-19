'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
   /* 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    */ 
    static associate(models) {
      // define association here

    }
  };
  hotel.init({
    hotelId: DataTypes.INTEGER,
    hotelname: DataTypes.STRING,
    pricerange: DataTypes.STRING,
    location: DataTypes.STRING,
    ranking: DataTypes.STRING,
    parking: DataTypes.STRING,
    wifi: DataTypes.STRING,
    swimmingpool: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    rooms: DataTypes.ARRAY(DataTypes.STRING),
    images: DataTypes.ARRAY(DataTypes.STRING),
    hotelemail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};


/*
const hotel = require('./hotel');
module.exports = (sequelize, DataTypes) => {
  const RoomModel = sequelize.define('RoomModel',{
   roomType: DataTypes.STRING,
   description: DataTypes.STRING,
   roomLabel: DataTypes.STRING,
   hotelId: DataTypes.INTEGER,
   status: DataTypes.STRING,
   price: DataTypes.STRING,
   roomImage: DataTypes.STRING
  },
  {
   sequelize,
   modelName: 'RoomModel',
   onUpdate: 'CASCADE',
   onDelete: 'CASCADE'
 });

 RoomModel.associate = () => {
  RoomModel.belongsTo(hotel)
}

   return RoomModel;
 };
 */
