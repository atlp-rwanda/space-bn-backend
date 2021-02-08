const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    static associate(models) {
      // association with room table
      request.belongsTo(models.RoomModel, {
        as: 'room',
        foreignKey: 'idRoom',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  request.init({
    idUser: DataTypes.INTEGER,
    requesterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idRoom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roomType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hotelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hotelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    requestStatus: {
      type: DataTypes.STRING,
      defaultValue: 'PENDING'
    }
  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};
