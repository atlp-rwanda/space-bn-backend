<<<<<<< HEAD
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
    roleId: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER,
    identification_type: DataTypes.STRING,
    identification_number: DataTypes.STRING,
    user_image: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
  }, {});

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
  };

  return User;
};
=======
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class ExampleTable extends Model {
   
    static associate(models) {
      // define association here
    }
  };
  ExampleTable.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exampleTable',
  });
  return ExampleTable;
};
>>>>>>> fixing bugs associated with Travis-ci
