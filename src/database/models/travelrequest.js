'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TravelRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TravelRequest.hasMany(models.TrLocation, {
        foreignKey: 'TravelRequestId',
        as: 'destinations',
      })
    }
  };
  TravelRequest.init({
    requesterId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TravelRequest',
  });
  return TravelRequest;
};