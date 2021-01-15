const User = require('../database/models').User;
const {decodeToken} = require('../utils/decodeToken');
require('dotenv').config();
const {validateProfile} = require('../middlewares/profileValidator');
const _ = require('lodash');

const udpateProfile = async(req,res) => {
const  loggedInUser = await decodeToken(req);
  const user = await User.findByPk(loggedInUser.id);
  if(!user)
   return res.status(404).send("User not found");

  
  const currentUser = user.dataValues;
  const {error, errorMessage} = await validateProfile(req.body,res);
  if(error)
  return res.status(400).send({
    success: false,
    error: errorMessage
  });

  const userId = req.params.userId;
  const payloads =  req.body;
  const capturedData = [];
  
  for(let prop in currentUser){
    if(payloads.hasOwnProperty(prop)){
      currentUser[prop] = payloads[prop].value;
      if(payloads[prop].save == true)
       capturedData.push(prop);
    }
    }

   //------------upate the save profile -----------
   currentUser.savedData = capturedData;  
     const isProfileUpdate = await updateProfile(userId, currentUser);
     if(isProfileUpdate == true)
     return res.status(200).json({
       success: true,
       message: "Profile saved",
       profile: _.pick(currentUser,['id','firstname','lastname','telephone','email','role','gender','origin','profession','identification_type',
       'identification_number','user_image'])
     }) 
 
}

const getUserProfile = async(req,res) => {
  const userId = req.params.userId;
  console.log("Getting data////////___________"+userId);

  let profile = {
   
  };
  const profilePayloads = await User.findByPk(userId);
  if(!profilePayloads)
   return res.status(404).send({success: false, message: "Profile not found"});
   
  
  for(let prop in profilePayloads.dataValues){
    let subObj = {};
    subObj['value'] = profilePayloads.dataValues[prop];
    profile[prop] = subObj;
    subObj['save'] = false;
    if(profilePayloads.dataValues.savedData){
      let savedDataIndex = profilePayloads.dataValues.savedData.indexOf(prop);
      if(savedDataIndex != -1){
         subObj['save'] = true;
      }
    }
  }

  return res.status(200).json(
    _.pick(profile,['id','firstname','lastname','telephone','email','role','gender','origin','profession','identification_type',
  'identification_number','user_image']));
}

const updateProfile = async(userId, payloads) => {
     try{
          await User.update(payloads, {
            where: {id: userId}
          });
          return true;
     }
     catch(e){
         return false;
        }
}


module.exports = { udpateProfile, getUserProfile};