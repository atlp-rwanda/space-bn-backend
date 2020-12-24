const jwt = require('jsonwebtoken');
const User = require('../database/models').User;
require('dotenv').config()

const signup = (req, res) => {
    
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then((user) => {
    if (user) {
      return res.status(409).send({
        message: 'Email already registered',
      });
    }
    User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          telephone: req.body.telephone || '',
          email: req.body.email,
          password: req.body.password,
          role: req.body.role || 'Nomad',
          gender: req.body.gender || '',
          origin: req.body.origin || '',
          profession: req.body.profession || '',
          age: req.body.age || 0,
          identification_type: req.body.identification_type || 'ID',
          identification_number: req.body.identification_number || '',
          user_image: req.file ? req.file.filename : ''
        })
        .then((user) => {
          
          var token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, {expiresIn: '1h'});
          jwt.verify(token, process.env.JWT_KEY, function(err, data){
            console.log(err, data);
          })
          res.status(201).json({
            message: 'User registered',
            user_details: user, 
            token: 'JWT ' + token
          });
        })
  })
  .catch((error) => res.status(400).send(error.message));
}

const signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then((user) => {
    if (!user) {
      return res.status(401).send({
        message: 'Authentication failed. User not found.',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        var token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_KEY, {expiresIn: '1h'});
        jwt.verify(token, process.env.JWT_KEY, function(err, data){
          console.log(err, data);
        })
        res.json({success: true, token: 'JWT ' + token});
      } else {
        res.status(401).send({success: false, message: 'Authentication failed. Wrong password.'});
      }
    })
  })
  .catch((error) => res.status(400).send(error));
  
}

module.exports = { signup, signin};