const Joi = require('joi');

const validateEmail = Joi.object({
    email: Joi.string().required(),
});

module.exports = {
    validateEmail,
};
