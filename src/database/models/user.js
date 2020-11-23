import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class ExampleTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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