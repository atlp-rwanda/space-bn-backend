'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    idUser: DataTypes.INTEGER,
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    origin: DataTypes.STRING,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER,
    identificationType: DataTypes.STRING,
    identificationNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};