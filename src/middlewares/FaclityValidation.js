import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import roleService from '../services/role';


const _validateFacility=async(req,res,next)=>{
  const  _schema=Joi.object().keys({
    location:Joi.string().required().max(70),
    address:Joi.string().required().max(70),
    images:Joi.string().max(100),
    roomNumber:Joi.number().optional(),
    roomDetails:Joi.string().optional()

  });
  const {error}=Joi.validate(req.body,_schema);
  if(error) return res.status(422).json({message:error.details[0].message})
  
  const loggedinUser=req.headers.authorization;
  if(!loggedinUser) return res.status(403).json({message:"Provide you credentials"})

  const validUser=  jwt.decode(loggedinUser.split(' ')[1], process.env.JWT_KEY, { expiresIn: '10h' });

  if(!validUser) return res.status(401).json({message:"Your not authorised!"})

  req.user = validUser;
  const { roleId } = validUser;

  if (roleId === null)  return res.status(401).json({ message: 'You must be a travel admin'});
  
  const loggedinUserRole = await roleService.findRoleById(roleId);
  if (loggedinUserRole.name === 'TRAVEL_ADMIN') return next();
  return res.status(401).json({ message: "You must be a travel admin"});


  
  return next();
  
}


module.exports={_validateFacility}