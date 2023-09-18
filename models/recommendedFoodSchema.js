const Joi = require('joi');

const recommendedFoodSchema = Joi.object({
    count: Joi.number().required().messages({
        'string.base': `Сount should be a type of number`,
        'string.empty': `Сount cannot be an empty field`,
        'any.required': `Сount is a required field`,
    }),
});

module.exports = { recommendedFoodSchema };
