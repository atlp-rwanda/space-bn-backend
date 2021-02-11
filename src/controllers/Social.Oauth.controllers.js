import model from "../database/models";
import generateToken from '../utils/genToken';


export const facebookController = async (req, res) => {
  
  const userData = {
    firstname: req.user._json.first_name,
    lastname: req.user._json.last_name,
  };
  const [user, created] = await model.User.findOrCreate({
    where: {firstname: userData.firstname, lastname: userData.lastname}
  });
      const token = generateToken({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId,
      });
  if (created) {
    res.status(201).json({user, token})
  } 
  else{
    res.status(200).json({user, token}) 
  }
};

