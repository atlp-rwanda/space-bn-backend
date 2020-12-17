'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotels extends Model {
    
    static associate(models) {
      //Association with rooms
      hotels.hasMany(models.rooms, {
        foreignKey: "idHotel",
        as: "rooms",
        onDelete: "cascade",
        onUpdate: "cascade"
      });
    }
  };
  hotels.init({
    idHotel: DataTypes.INTEGER,
    hName: DataTypes.STRING,
    hEmail: DataTypes.STRING,
    geoLocation: DataTypes.STRING,
    managerNames: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotels',
  });
  return hotels;
};