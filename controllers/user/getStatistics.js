const { Food, Water } = require('../../models');
const { nutrientsByFoodType, nutrientsTotalPerDay, asyncHandler } = require('../../utils');

const getStatistics = asyncHandler(async (req, res) => {
    const user = req.user;
    const owner = String(req.user._id);
    const requestDate = req.body.date || new Date();

    const beginDate = new Date(requestDate);
    const endDate = new Date(requestDate);
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    endDate.setDate(endDate.getDate() + 1); // Наступний день + вибірка по $lt = вибірка до кінця поточного дня

    const foodData = await Food.findOne({ owner, date: { $gte: beginDate, $lt: endDate } });
    const waterData = await Water.findOne({ owner, date: { $gte: beginDate, $lt: endDate } });

    const breakfast = nutrientsByFoodType(foodData, 'breakfast');
    const lunch = nutrientsByFoodType(foodData, 'lunch');
    const dinner = nutrientsByFoodType(foodData, 'dinner');
    const snack = nutrientsByFoodType(foodData, 'snack');
    const total = nutrientsTotalPerDay(user, waterData, foodData);

    res.status(200).json({
        date: requestDate,
        breakfast,
        lunch,
        dinner,
        snack,
        total,
    });
});

module.exports = { getStatistics };
