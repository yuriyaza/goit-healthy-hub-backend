const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../utils/handleMongooseError');

const recommendedFoodSchema = new Schema(
    {
        name: String,
        amount: String,
        img: String,
        calories: Number,
        nutrition: {
            carbohydrates: Number,
            protein: Number,
            fat: Number,
        },
    },
    { versionKey: false, timestamps: true }
);

recommendedFoodSchema.post('save', handleMongooseError);

const RecommendedFood = model('recomendations', recommendedFoodSchema);

module.exports = { RecommendedFood };
