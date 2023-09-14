const Joi = require('joi');

const validateGoal = Joi.object({
    goal: Joi.string().required(),
});

module.exports = {
    validateGoal,
};
