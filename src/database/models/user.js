<<<<<<< HEAD
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
=======
'use strict';

import bcrypt from 'bcrypt';


module.exports = (sequelize, DataTypes) => {

>>>>>>> ft(hotel-models) : rebasing
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
<<<<<<< HEAD
    roleId: DataTypes.INTEGER,
=======
    role: DataTypes.STRING,
>>>>>>> ft(hotel-models) : rebasing
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER,
    identification_type: DataTypes.STRING,
    identification_number: DataTypes.STRING,
<<<<<<< HEAD
    user_image: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
=======
    user_image: DataTypes.STRING
>>>>>>> ft(hotel-models) : rebasing
  }, {});

  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });

  User.prototype.comparePassword = function (passw, cb) {
<<<<<<< HEAD
    bcrypt.compare(passw, this.password, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.associate = function (models) {
=======
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };

  User.associate = function(models) {
>>>>>>> ft(hotel-models) : rebasing
    // associations can be defined here
  };

  return User;
};
