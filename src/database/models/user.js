'use strict';

import bcrypt from 'bcrypt';


module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER,
    identification_type: DataTypes.STRING,
    identification_number: DataTypes.STRING
  }, {});

  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });

  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;

};