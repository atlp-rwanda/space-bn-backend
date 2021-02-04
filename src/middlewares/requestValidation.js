/* eslint-disable import/prefer-default-export */
import Joi from 'joi';

export const createRequestValidation = (req, res, next) => {
  const schema = Joi.object().keys({
    hotelName: Joi.string().min(3).required(),
    idRoom: Joi.number().integer().min(1).required(),
    dateStart: Joi.date().required(),
    dateEnd: Joi.date().greater(Joi.ref('dateStart')).required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

export const updateRequestValidation = (req, res, next) => {
  const schema = Joi.object().keys({
    hotelName: Joi.string().min(3),
    idRoom: Joi.number().integer().min(1),
    dateStart: Joi.date(),
    dateEnd: Joi.date().greater(Joi.ref('dateStart'))
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0] });

  return next();
};

export const approveRequestValidation = (req, res, next) => {
  const schema = Joi.object().keys({
    requestStatus: Joi.string().valid('PENDING', 'APPROVED', 'REJECTED')
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0] });

  return next();
};
