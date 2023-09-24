const { Food, Water } = require('../../models');
const { nutrientsByFoodType, nutrientsTotalPerDay, asyncHandler } = require('../../utils');

const getStatistics = asyncHandler(async (req, res) => {
    const user = req.user;
    const owner = String(req.user._id);
    const requestDate = req.body.date || new Date();

    const beginDate = new Date(requestDate);
    const endDate = new Date(requestDate);
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const foodData = await Food.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });
    const waterData = await Water.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });
    
    // Розрахунок статистики для відображення в Main Page
    const breakfast = nutrientsByFoodType(foodData, 'breakfast');
    const lunch = nutrientsByFoodType(foodData, 'lunch');
    const dinner = nutrientsByFoodType(foodData, 'dinner');
    const snack = nutrientsByFoodType(foodData, 'snack');
    const total = nutrientsTotalPerDay(user, waterData, foodData);

    // Разом зі статистикою повертаємо перелік страв (сніданок, обід, вечеря...) для оновлення в store
    let breakfastDishes = [];
    let lunchDishes = [];
    let dinnerDishes = [];
    let snackDishes = [];

    if (foodData) {
        breakfastDishes = foodData.breakfast;
        lunchDishes = foodData.lunch;
        dinnerDishes = foodData.dinner;
        snackDishes = foodData.snack;
    }

    res.status(200).json({
        date: requestDate,
        breakfast,
        lunch,
        dinner,
        snack,
        total,
        breakfastDishes,
        lunchDishes,
        dinnerDishes,
        snackDishes,
    });
});

module.exports = { getStatistics };
