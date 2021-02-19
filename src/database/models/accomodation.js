'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accomodation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      accomodation.belongsTo(models.hotel, {
        foreignKey:'hotelId',
        as:'Hotel'
      })
      accomodation.belongsTo(models.RoomModel, {
        foreignKey:'roomId',
        as:'Room'
      })
    }
  };
  accomodation.init({
    hotelId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'accomodation',
  });
  return accomodation;
};