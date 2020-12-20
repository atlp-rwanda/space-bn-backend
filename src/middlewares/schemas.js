// load Joi module
const Joi = require('joi');

// accepts name only as letters
const name = Joi.string().required();

const personDataSchema = Joi.object().keys({
    firstname: name,
    lastname: name,
    telephone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[^a-zA-Z\d\s:]/, 'Your password must be non-alphanumeric characters.').min(8).required(),
    role: Joi.string().valid('Nomad', 'Hotel Manager').required(),
    gender: Joi.string().valid(['Male', 'Female']).required(),
    origin: Joi.string().required(),
    profession: Joi.string().required(),
    age: Joi.number().integer().required(),
    identification_type: Joi.string().valid('Passport', 'ID').required(),
    identification_number: Joi.string().required(),
    user_image: Joi.string()

});


// export the schemas
module.exports = {
    '/signup': personDataSchema
};