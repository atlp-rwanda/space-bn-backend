'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hotels.init({
    hotelName: DataTypes.STRING,
    priceRange: DataTypes.STRING,
    location: DataTypes.STRING,
    ranking: DataTypes.STRING,
    parking: DataTypes.STRING,
    wifi: DataTypes.STRING,
    swimmingPool: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    rooms: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'hotels',
  });
  return hotels;
};