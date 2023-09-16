const Joi = require('joi');

const validateDate = Joi.object({
    date: Joi.date().default(Date.now()),
});

module.exports = {
    validateDate,
};
