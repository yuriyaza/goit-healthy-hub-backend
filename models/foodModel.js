const mongoose = require('mongoose');

const foodDBSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'Date is required'],
            default: Date.now(),
        },
        owner: {
            type: String,
            required: [true, 'Owner is required'],
        },
        breakfast: [
            {
                name: String,
                calories: Number,
                carbohydrates: Number,
                protein: Number,
            },
        ],
        lunch: [
            {
                name: String,
                calories: Number,
                carbohydrates: Number,
                protein: Number,
            },
        ],
        dinner: [
            {
                name: String,
                calories: Number,
                carbohydrates: Number,
                protein: Number,
            },
        ],
        snack: [
            {
                name: String,
                calories: Number,
                carbohydrates: Number,
                protein: Number,
            },
        ],
    },

    { versionKey: false, timestamps: true }
);

const Food = mongoose.model('foods', foodDBSchema);

module.exports = { Food };


// Приклад для додавання даних
// const body = {
//     owner: '65031911f17fba06873b295f',
//     breakfast: [
//         { qwe: 23, name: 'Apple', calories: 52, carbohydrates: 14, protein: 0.3, fat: 0.2 },
//         { name: 'Strawberries', calories: 32, carbohydrates: 7.68, protein: 0.67, fat: 0.3 },
//     ],
//     lunch: [
//         { name: 'Spinach', calories: 23, carbohydrates: 3.6, protein: 2.9, fat: 0.4 },
//         { name: 'Kale', calories: 49, carbohydrates: 8.8, protein: 3.3, fat: 0.9 },
//         { name: 'Quinoa', calories: 120, carbohydrates: 21.3, protein: 4.4, fat: 1.9 },
//     ],
//     dinner: [
//         { name: 'Greek Yogurt', calories: 59, carbohydrates: 3.6, protein: 10, fat: 0.4 },
//         { name: 'Chicken Breast', calories: 165, carbohydrates: 0, protein: 31, fat: 3.6 },
//     ],
// };
