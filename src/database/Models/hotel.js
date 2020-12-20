'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hotel.init({
    hotelname: DataTypes.STRING,
    pricerange: DataTypes.STRING,
    location: DataTypes.STRING,
    ranking: DataTypes.STRING,
    parking: DataTypes.STRING,
    wifi: DataTypes.STRING,
    swimmingpool: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    rooms: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};