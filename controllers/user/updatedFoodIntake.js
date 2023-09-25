const { Food, Water } = require('../../models');
const { FindAndUpdateDish, nutrientsTotalPerTime, nutrientsTotalPerDay, asyncHandler, throwHttpError } = require('../../utils');

const updatedFoodIntake = asyncHandler(async (req, res) => {
    const user = req.user;
    const owner = String(req.user._id);
    
    const changedDish = {
        id: req.params.id,
        name: req.body.name,
        calories: req.body.calories,
        carbohydrates: req.body.carbohydrates,
        protein: req.body.protein,
        fat: req.body.fat,
    };

    const currentDate = new Date('2023-09-15 14:00');
    const startOfDay = new Date(currentDate);
    const endOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
    endOfDay.setHours(23, 59, 59, 999);

    let foodData = await Food.findOne({ owner, date: { $gte: startOfDay, $lte: endOfDay } });

    if (!foodData) {
        throwHttpError(400, 'Dish not found');
    }

    foodData = FindAndUpdateDish(foodData, 'breakfast', changedDish);
    foodData = FindAndUpdateDish(foodData, 'lunch', changedDish);
    foodData = FindAndUpdateDish(foodData, 'dinner', changedDish);
    foodData = FindAndUpdateDish(foodData, 'snack', changedDish);

    const savedFoodEntry = await foodData.save();

    // Розрахунок даних, які змінюються при додаванні їжі - для відображення змін в інтерфейсі
    let breakfastDishes = [];
    let lunchDishes = [];
    let dinnerDishes = [];
    let snackDishes = [];

    if (savedFoodEntry) {
        breakfastDishes = savedFoodEntry.breakfast;
        lunchDishes = savedFoodEntry.lunch;
        dinnerDishes = savedFoodEntry.dinner;
        snackDishes = savedFoodEntry.snack;
    }

    const existingWaterEntry = await Water.findOne({ owner, date: { $gte: startOfDay, $lte: endOfDay } });
    const breakfastTotal = nutrientsTotalPerTime(breakfastDishes);
    const lunchTotal = nutrientsTotalPerTime(lunchDishes);
    const dinnerTotal = nutrientsTotalPerTime(dinnerDishes);
    const snackTotal = nutrientsTotalPerTime(snackDishes);
    const nutrientsTotal = nutrientsTotalPerDay(user, existingWaterEntry, savedFoodEntry);

    res.status(200).json({
        breakfast: breakfastTotal,
        lunch: lunchTotal,
        dinner: dinnerTotal,
        snack: snackTotal,
        breakfastDishes,
        lunchDishes,
        dinnerDishes,
        snackDishes,
        total: nutrientsTotal,
    });
});

module.exports = { updatedFoodIntake };
