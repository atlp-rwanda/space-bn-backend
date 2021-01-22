'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN,
    identification_type: DataTypes.STRING,
    identification_number: DataTypes.STRING,
    user_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });

  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.userRoles, {
      as: 'role',
      foreignKey: 'roleId'
    })
  };

  return User;

};