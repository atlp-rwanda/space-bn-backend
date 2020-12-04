import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class ExampleTable extends Model {
    static associate(models) {
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