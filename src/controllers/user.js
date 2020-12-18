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
          telephone: req.body.telephone,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
          gender: req.body.gender,
          origin: req.body.origin,
          profession: req.body.profession,
          age: req.body.age,
          identification_type: req.body.identification_type,
          identification_number: req.body.identification_number
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



module.exports = { signup };