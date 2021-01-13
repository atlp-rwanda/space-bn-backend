'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    static associate(models) {
      // define association here
    }
  };
  request.init({
    idUser: DataTypes.INTEGER,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    requestStatus: {
      type: DataTypes.STRING,
      defaultValue: "Pending"
    },
    idRoom: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};