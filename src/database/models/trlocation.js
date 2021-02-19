'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TrLocation.belongsTo(models.TravelRequest)
      TrLocation.belongsTo(models.accomodation,{
        foreignKey:"accomodationId",
        as:"accomodation"
      })

    }
  };
  TrLocation.init({
    name: DataTypes.STRING,
    arrivalTime: DataTypes.DATE,
    departureTime: DataTypes.DATE,
    TravelRequestId: DataTypes.INTEGER,
    accomodationId: {
      type: DataTypes.INTEGER,
    }

  }, {
    sequelize,
    modelName: 'TrLocation',
  });
  return TrLocation;
};