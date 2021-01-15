/* eslint-disable import/prefer-default-export */
import Joi from 'joi';

export const createHotelValidation = (req, res, next) => {
  const schema = Joi.object().keys({
    hotelname: Joi.string().required(),
    pricerange: Joi.string().required(),
    location: Joi.string().required(),
    rooms: Joi.string().required(),
    images: Joi.string().required(),
    hotelemail: Joi.string().email().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};
