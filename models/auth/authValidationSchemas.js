const Joi = require('joi');

const authAllSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const authEmailSchema = Joi.object({
    email: Joi.string().required(),
});

module.exports = {
    authAllSchema,
    authEmailSchema,
};
