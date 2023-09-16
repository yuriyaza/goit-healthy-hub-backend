const Joi = require('joi');

const weightSchema = Joi.object({
    date: Joi.date().default(Date.now()).messages({
        'date.base': `Date should be a valid date`,
    }),
    weight: Joi.number().required().messages({
        'string.base': `Weight should be a type of number`,
        'string.empty': `Weight cannot be an empty field`,
        'any.required': `Weight is a required field`,
    }),
});

module.exports = { weightSchema };
