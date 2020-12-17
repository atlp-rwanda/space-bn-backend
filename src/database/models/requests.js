'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class requests extends Model {
  
    static associate(models) {
      //association with user table
      requests.belongsTo(models.users, {
        as: "user",
        foreignKey: "idUser",
        onDelete: 'CASCADE'
      });
      //association with room table
      requests.belongsTo(models.rooms, {
        as: "room",
        foreignKey: "idRoom",
        onDelete: 'CASCADE'
      });
    }
  };
  requests.init({
    idRequest: DataTypes.STRING,
    idUser: DataTypes.STRING,
    idRoom: DataTypes.STRING,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
    requestStatus: {
      type: DataTypes.STRING,
      defaultValue: "Pending"
    }
  }, {
    sequelize,
    modelName: 'requests',
  });
  return requests;
};