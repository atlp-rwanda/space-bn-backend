const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here

    }
  }
  Reply.init({

    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER,
    requesterName: DataTypes.STRING,
    replierName: DataTypes.STRING,
    replyContent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};
