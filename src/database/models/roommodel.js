module.exports = (sequelize, DataTypes) => {
  const roommodel = sequelize.define('roommodel',{
   roomType: DataTypes.STRING,
   description: DataTypes.STRING,
   roomLabel: DataTypes.STRING,
   hotelId: DataTypes.UUID,
   status: DataTypes.STRING,
   price: DataTypes.STRING
  },
  {
   sequelize,
   modelName: 'roommodel',
   onUpdate: 'CASCADE',
   onDelete: 'CASCADE'
 });
 
  roommodel.associate = (models) => {
    roommodel.belongsTo(models.hotel, {
      foreignKey: 'hotelId',
    });
 };
  
   return roommodel;
 };