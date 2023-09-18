const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../utils/handleMongooseError');

const recommendedFoodSchema = new Schema(
    {
        count: {
            type: Number,
            required: [true, 'Сount is required'],
        },
    },
    { versionKey: false, timestamps: true }
);

recommendedFoodSchema.post('save', handleMongooseError);

const RecommendedFood = model('recomendations', recommendedFoodSchema);

module.exports = { RecommendedFood };
