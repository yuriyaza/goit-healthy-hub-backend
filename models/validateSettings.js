const Joi = require('joi');

const validateSettings = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.number().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    activity: Joi.number().required(),
    avatar: Joi.string(),
});

module.exports = {
    validateSettings,
};
