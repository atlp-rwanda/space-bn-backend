'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
  
    static associate(models) {
      //association with user accomodation requests
      rooms.hasMany(models.rooms, {
        foreignKey: "idRoom",
        as: "rooms",
        onDelete: "cascade",
        onUpdate: "cascade"
      });

      //association with user hotel
      rooms.belongsTo(models.hotels, {
        as: "hotel",
        foreignKey: "idHotel",
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      });
    }
  };
  rooms.init({
    idRoom: DataTypes.INTEGER,
    idHotel: DataTypes.INTEGER,
    description: DataTypes.STRING,
    roomType: DataTypes.STRING,
    roomLabel: DataTypes.STRING,
    roomStatus: {
      type: DataTypes.STRING,
      defaultValue: "available"
    },
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};