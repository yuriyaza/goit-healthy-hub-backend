const Joi = require('joi');

const validateDish = Joi.object({
    name: Joi.string().required(),
    calories: Joi.number().required(),
    carbohydrates: Joi.number().required(),
    protein: Joi.number().required(),
    fat: Joi.number().required(),
});

module.exports = {
    validateDish,
};
