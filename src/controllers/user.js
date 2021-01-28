import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import model from '../database/models';

dotenv.config();


const signup = (req, res) => {
    
  model.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (user) {
        return res.status(409).json({
          message: res.__('Email already registered'),
        });
      }
      model.User.create({
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
          });
          res.status(201).json({
            message: res.__('User registered'),
            user_details: user,
            token: `JWT ${token}`
          });
        });
    })
    .catch((error) => res.status(400).json(error.message));
};
var token;
  const signin = (req, res) => {
  model.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: res.__('Authentication failed. User not found.'),
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
           token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, { expiresIn: '1h' });
          jwt.verify(token, process.env.JWT_KEY, (err, data) => {
           
          });
          res.json({ success: true, token: `JWT ${token}` });
        } else {
          res.status(401).json({ success: false, message: res.__('Authentication failed. Wrong password.' )});
        }
      });
    })
    .catch((error) => res.status(400).json(error));
};

   const getAllUsers = async (req, res) => {

    const user = await model.User.findAll();
    if (user){
      return res.status(200).json({user});
    }else{
      res.status(500).json({message: res.__('Error')});
    }
        
}


const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await model.User.findByPk(id);

    if (user) {
      return res.status(200).json({ user });
    }else{
      return res.status(404).json({message: res.__('No User with the specified')});
    }

  }catch(error){
    res.status(500).json({ message: res.__('Error')})
  }
 
}

 const updateUserById = async (req, res) => {
  
    const users = await model.User.findAll();
    for(let i=0; i < users.length; i++){
      if (users[i].email === req.body.email){
          return res.status(409).json({
             message: res._('User update failed, a user with the specified email exist'),
          });
      }
    }
    try {
      const id = req.params.id;
      const [user] = await model.User.update(req.body, {where: {id : id }});
      
      if(user){
        return res.status(200).json({ message: res._('User updated successfully' )});
      }else{
        return res.send({ message: res._(`Cannot update User with id=${id}. User not found`)});
      }
  
    }catch(error){
      return res.status(500).json({ message:res._('Error')});
    }

}
 const deleteUserById = async (req, res) => {
  try {
      const id = req.params.id;
      const user = await model.User.destroy({where: {id : id }});

      if(user){
        return res.status(200).json({ message: res._('User deleted successfully!') });
      }else{
        return res.send({ message: res._(`Cannot delete User with id=${id}. Maybe User was not found!`)});
      }

    }catch(error){
      return res.status(500).json({ message: res._('Error') });
    }
}

const logout = (req, res) => {
  token = undefined;
  process.env.JWT_KEY = token;
  res.status(200).json({message: res._("You are logged out now!")});
  return
}

module.exports = {signin,signup,getAllUsers,deleteUserById,updateUserById,getUserById,logout}
