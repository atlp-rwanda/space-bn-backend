import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../database/models';
import sendVerificationEmail from '../middlewares/sendEmail';
dotenv.config();


export const signup = (req, res) => {
  
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (user) {
        return res.status(409).json({
          message: 'Email already registered',
        });
      }
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        telephone: req.body.telephone || '',
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender || '',
        origin: req.body.origin || '',
        profession: req.body.profession || '',
        age: req.body.age || 0,
        identification_type: req.body.identification_type || 'ID',
        identification_number: req.body.identification_number || '',
        user_image: req.file ? req.file.filename : ''
      })
        .then((user) => {
          const token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, { expiresIn: '1h' });
          jwt.verify(token, process.env.JWT_KEY, (err, data) => {
            console.log(err, data);
          });
          res.status(201).json({
            message: 'User registered',
            user_details: user,
            token: `JWT ${token}`
          });
          sendVerificationEmail(user.firstname, user.email, token);
        })
    })
    .catch((error) => res.status(400).json(error.message));
};
var token;
export const signin = (req, res) => {
  model.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed. User not found.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
           token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, { expiresIn: '1h' });
          jwt.verify(token, process.env.JWT_KEY, (err, data) => {
            console.log(err, data);
          });
          res.json({ success: true, token: `JWT ${token}` });
        } else {
          res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
        }
      });
    })
    .catch((error) => res.status(400).json(error));
};

export const getAllUsers = async (req, res) => {

    const user = await User.findAll();
    if (user){
      return res.status(200).json({user});
    }      
}


export const getUserById = async (req, res) => {
  
    const id = req.params.id;
    const user = await User.findByPk(id);

    if (user) {
      return res.status(200).json({ user });
    }else{
      return res.status(404).json({message: 'No User with the specified'});
    }
 
}

export const updateUserById = async (req, res) => {
  
    const users = await User.findAll();
    for(let i=0; i < users.length; i++){
      if (users[i].email === req.body.email){
          return res.status(409).json({
             message: 'User update failed, a user with the specified email exist',
          });
      }
    }
    try {
      const id = req.params.id;
      const [user] = await User.update(req.body, {where: {id : id }});
      
      if(user){
        return res.status(200).json({ message: 'User updated successfully' });
      }else{
        return res.send({ message: `Cannot update User with id=${id}. User not found`});
      }
  
    }catch(error){
      return res.status(500).json({ message:'Error'});
    }

}
export const deleteUserById = async (req, res) => {
  try {
      const id = req.params.id;
      const user = await User.destroy({where: {id : id }});
      if(user){
        return res.status(200).json({ message: 'User deleted successfully!' });
      }else{
        return res.send({ message: `Cannot delete User with id=${id}. Maybe User was not found!`});
      }

    }catch(error){
      return res.status(500).json({ message: 'Error' });
    }
}

export const logout = (req, res) => {
  token = undefined;
  process.env.JWT_KEY = token;
  res.status(200).json({message: "You are logged out now!"});
  return
}

export const verify = async (req, res, error) => {

  try{
    jwt.verify(req.params.token, process.env.JWT_KEY);

    const user = jwt.decode(req.params.token);
    const userEmail = await User.findOne({where : {email: user.email}});
    
    if(!userEmail){
      res.status(404).json({message: 'User does not exist'});
    }else if(userEmail.isVerified === true){
      res.status(200).json({message: 'User is already verified'});
    }else{
      const verifiedUser = await User.update( {isVerified: true} , {where : {email: user.email}})
      return res.status(200).json({message: 'User successfully verified', verifiedUser});
    }
  }
  catch(error){
    res.status(404).json({message: 'Expired or invalid token'});
  }
}
