
module.exports = (sequelize, DataTypes) => {
  const RoomModel = sequelize.define('RoomModel',{
   roomType: DataTypes.STRING,
   description: DataTypes.STRING,
   roomLabel: DataTypes.STRING,
   hotelId: DataTypes.INTEGER,
   status: DataTypes.STRING,
   price: DataTypes.STRING,
   roomImage: DataTypes.STRING
  },
  {
   sequelize,
   modelName: 'RoomModel',
   onUpdate: 'CASCADE',
   onDelete: 'CASCADE'
 });

<<<<<<< HEAD
   return RoomModel;
 };

 /*
      "firstname": "alin",
    "lastname": "mukuru",
    "telephone":"0784450008" ,
    "email": "mukuru@gmail.com" ,
    "password": "mukuru@#" ,
    "roleId": 1,
    "gender": "Male",
    "origin": "kugali",
    "profession":"IT" ,
    "age": 40,
    "isVerified": false,
    "identification_type": "ID",
    "identification_number": "19806567999800",
    "user_image":"http://www.cloudnary.com/images/myimage.png"
 */
=======
  
   return roommodel;
 };
>>>>>>> 4ed03cf... removes the hotel
