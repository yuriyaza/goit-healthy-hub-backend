const Joi = require('joi');

const waterSchema = Joi.object({
    date: Joi.date().default(Date.now()).messages({
        'date.base': `Date should be a valid date`,
    }),
    water: Joi.number().required().messages({
        "string.base": `Water should be a type of number`,
        "string.empty": `Water cannot be an empty field`,
        "any.required": `Water is a required field`,
      }),
  });


  module.exports = {waterSchema}