'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sampleModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sampleModel.init({
    name: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sampleModel',
  });
  return sampleModel;
};