const { Food, Water } = require('../../models');
const { asyncHandler } = require('../../utils');

const getStatistics = asyncHandler(async (req, res) => {
    let waterUsed = 0;
    let caloriesUsed = 0;
    let carbohydratesUsed = 0;
    let proteinUsed = 0;
    let fatUsed = 0;

    const owner = req.user._id;
    const requestDate = req.body.date || new Date();

    const beginDate = new Date(requestDate);
    const endDate = new Date(requestDate);
    endDate.setDate(endDate.getDate() + 1); // Збільшуємо на 1 день

    const waterData = await Water.findOne({ owner, date: { $gte: beginDate, $lt: endDate } });
    if (waterData) {
        waterUsed = waterData.water;
    }

    const foodData = await Food.findOne({ owner, date: { $gte: beginDate, $lt: endDate } });
    if (foodData) {
        const dishes = [...foodData.breakfast, ...foodData.lunch, ...foodData.dinner, ...foodData.snack];
        dishes.forEach(dish => {
            caloriesUsed = caloriesUsed + dish.calories;
            carbohydratesUsed = carbohydratesUsed + dish.carbohydrates;
            proteinUsed = proteinUsed + dish.protein;
            fatUsed = fatUsed + dish.fat;
        });
    }

    res.status(200).json({
        date: requestDate,
        water: {
            goal: 1500,
            used: waterUsed.toFixed(0),
        },
        calories: {
            goal: 1700,
            used: caloriesUsed.toFixed(0),
        },
        carbohydrates: {
            goal: 170,
            used: carbohydratesUsed.toFixed(2),
        },
        protein: {
            goal: 127.5,
            used: proteinUsed.toFixed(2),
        },
        fat: {
            goal: 56,
            used: proteinUsed.toFixed(2),
        },
    });
});

module.exports = { getStatistics };
