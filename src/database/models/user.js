'use strict';

const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
   
//     static associate(models) {
     
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });

  };
  return User;
};

