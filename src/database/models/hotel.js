/* eslint-disable require-jsdoc */
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    static associate(models) {
      // define association here
      hotel.hasMany(models.RoomModel, {
        foreignKey: 'hotelId',
        as: 'rooms'
      });
    }
  }
  hotel.init({
    hotelname: DataTypes.STRING,
    location: DataTypes.STRING,
    coordinates: DataTypes.ARRAY(DataTypes.FLOAT),
    pricerange: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    swimmingpool: DataTypes.STRING,
    wifi: DataTypes.STRING,
    parking: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    hotelemail: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};
