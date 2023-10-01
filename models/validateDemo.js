const Joi = require('joi');

const validateDemo = Joi.object({
    begin: Joi.date().required().messages({
        'any.required': `Period is not defined. Set parameters 'begin' and 'end' in format 'YYYY-MM-DD'`,
        'date.base': `Invalid date or date format. Set parameter 'begin' in format 'YYYY-MM-DD'`,
    }),
    end: Joi.date().required().messages({
        'any.required': `Period is not defined. Set parameters 'begin' and 'end' in format 'YYYY-MM-DD'`,
        'date.base': `Invalid date or date format. Set parameter 'end' in format 'YYYY-MM-DD'`,
    }),
    delta: Joi.number(),
    clearAllBeforeGenerate: Joi.boolean(),
});

module.exports = {
    validateDemo,
};
