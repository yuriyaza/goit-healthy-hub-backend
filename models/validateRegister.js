const Joi = require('joi');

const validateRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.number().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    activity: Joi.number().required(),
    goal: Joi.string().required(),
    avatar: Joi.string(),
});

module.exports = {
    validateRegister,
};
