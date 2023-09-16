const Joi = require('joi');

const foodSchema = Joi.object({
    date: Joi.date().default(Date.now()).messages({
        'any.required': `Date is a required field`,
    }),
    breakfast: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required().label('Meal Name').messages({
                    'string.base': 'Breakfast/ {{#label}} should be a type of string',
                    'string.empty': 'Breakfast/ {{#label}} cannot be an empty field',
                    'any.required': 'Breakfast/ {{#label}} is a required field',
                }),
                calories: Joi.number().required().label('Calories').messages({
                    'number.base': 'Breakfast/ {{#label}} should be a type of number',
                    'number.positive': 'Breakfast/ {{#label}} should be a positive number',
                    'any.required': 'Breakfast/ {{#label}} is a required field',
                }),
                carbohydrates: Joi.number().required().label('Carbohydrates').messages({
                    'number.base': 'Breakfast/ {{#label}} should be a type of number',
                    'number.positive': 'Breakfast/ {{#label}} should be a positive number',
                    'any.required': 'Breakfast/ {{#label}} is a required field',
                }),
                protein: Joi.number().required().label('Protein').messages({
                    'number.base': 'Breakfast/ {{#label}} should be a type of number',
                    'number.positive': 'Breakfast/ {{#label}} should be a positive number',
                    'any.required': 'Breakfast/ {{#label}} is a required field',
                }),
                fat: Joi.number().required().label('Fat').messages({
                    'number.base': 'Breakfast/ {{#label}} should be a type of number',
                    'number.positive': 'Breakfast/ {{#label}} should be a positive number',
                    'any.required': 'Breakfast/ {{#label}} is a required field',
                }),
            })
        )
        .min(1)
        .label('Breakfast')
        .messages({
            'array.base': '{{#label}} should be an array',
            'array.min': 'At least one {{#label}} is required',
            'any.required': '{{#label}} is a required field',
        }),
    lunch: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required().label('Meal Name').messages({
                    'string.base': 'Lunch/ {{#label}} should be a type of string',
                    'string.empty': 'Lunch/ {{#label}} cannot be an empty field',
                    'any.required': 'Lunch/ {{#label}} is a required field',
                }),
                calories: Joi.number().required().label('Calories').messages({
                    'number.base': 'Lunch/ {{#label}} should be a type of number',
                    'number.positive': 'Lunch/ {{#label}} should be a positive number',
                    'any.required': 'Lunch/ {{#label}} is a required field',
                }),
                carbohydrates: Joi.number().required().label('Carbohydrates').messages({
                    'number.base': 'Lunch/ {{#label}} should be a type of number',
                    'number.positive': 'Lunch/ {{#label}} should be a positive number',
                    'any.required': 'Lunch/ {{#label}} is a required field',
                }),
                protein: Joi.number().required().label('Protein').messages({
                    'number.base': 'Lunch/ {{#label}} should be a type of number',
                    'number.positive': 'Lunch/ {{#label}} should be a positive number',
                    'any.required': 'Lunch/ {{#label}} is a required field',
                }),
                fat: Joi.number().required().label('Fat').messages({
                    'number.base': 'Lunch/ {{#label}} should be a type of number',
                    'number.positive': 'Lunch/ {{#label}} should be a positive number',
                    'any.required': 'Lunch/ {{#label}} is a required field',
                }),
            })
        )
        .min(1)
        .label('Lunch')
        .messages({
            'array.base': '{{#label}} should be an array',
            'array.min': 'At least one {{#label}} is required',
            'any.required': '{{#label}} is a required field',
        }),
    dinner: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required().label('Meal Name').messages({
                    'string.base': 'Dinner/ {{#label}} should be a type of string',
                    'string.empty': 'Dinner/ {{#label}} cannot be an empty field',
                    'any.required': 'Dinner/ {{#label}} is a required field',
                }),
                calories: Joi.number().required().label('Calories').messages({
                    'number.base': 'Dinner/ {{#label}} should be a type of number',
                    'number.positive': 'Dinner/ {{#label}} should be a positive number',
                    'any.required': 'Dinner/ {{#label}} is a required field',
                }),
                carbohydrates: Joi.number().required().label('Carbohydrates').messages({
                    'number.base': 'Dinner/ {{#label}} should be a type of number',
                    'number.positive': 'Dinner/ {{#label}} should be a positive number',
                    'any.required': 'Dinner/ {{#label}} is a required field',
                }),
                protein: Joi.number().required().label('Protein').messages({
                    'number.base': 'Dinner/ {{#label}} should be a type of number',
                    'number.positive': 'Dinner/ {{#label}} should be a positive number',
                    'any.required': 'Dinner/ {{#label}} is a required field',
                }),
                fat: Joi.number().required().label('Fat').messages({
                    'number.base': 'Dinner/ {{#label}} should be a type of number',
                    'number.positive': 'Dinner/ {{#label}} should be a positive number',
                    'any.required': 'Dinner/ {{#label}} is a required field',
                }),
            })
        )
        .min(1)
        .label('Dinner')
        .messages({
            'array.base': '{{#label}} should be an array',
            'array.min': 'At least one {{#label}} is required',
            'any.required': '{{#label}} is a required field',
        }),
    snack: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required().label('Meal Name').messages({
                    'string.base': 'Snack/ {{#label}} should be a type of string',
                    'string.empty': 'Snack/ {{#label}} cannot be an empty field',
                    'any.required': 'Snack/ {{#label}} is a required field',
                }),
                calories: Joi.number().required().label('Calories').messages({
                    'number.base': 'Snack/ {{#label}} should be a type of number',
                    'number.positive': 'Snack/ {{#label}} should be a positive number',
                    'any.required': 'Snack/ {{#label}} is a required field',
                }),
                carbohydrates: Joi.number().required().label('Carbohydrates').messages({
                    'number.base': 'Snack/ {{#label}} should be a type of number',
                    'number.positive': 'Snack/ {{#label}} should be a positive number',
                    'any.required': 'Snack/ {{#label}} is a required field',
                }),
                protein: Joi.number().required().label('Protein').messages({
                    'number.base': 'Snack/ {{#label}} should be a type of number',
                    'number.positive': 'Snack/ {{#label}} should be a positive number',
                    'any.required': 'Snack/ {{#label}} is a required field',
                }),
                fat: Joi.number().required().label('Fat').messages({
                    'number.base': 'Snack/ {{#label}} should be a type of number',
                    'number.positive': 'Snack/ {{#label}} should be a positive number',
                    'any.required': 'Snack/ {{#label}} is a required field',
                }),
            })
        )
        .min(1)
        .label('Snack')
        .messages({
            'array.base': '{{#label}} should be an array',
            'array.min': 'At least one {{#label}} is required',
            'any.required': '{{#label}} is a required field',
        }),
});

module.exports = { foodSchema };
