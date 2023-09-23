const Joi = require('joi');

const emailSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": `email should be a type of 'text'`,
      "string.empty": `email cannot be an empty field`,
      "any.required": `email is a required field`,
    }),
  });

  module.exports = { emailSchema };