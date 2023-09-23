const { Food, Water } = require('../../models');
const { nutrientsTotalPerTime, nutrientsByFoodType, nutrientsTotalPerDay, asyncHandler } = require('../../utils');

const foodIntake = asyncHandler(async (req, res) => {
    const user = req.user;
    const owner = req.user._id;
    const { breakfast, lunch, dinner, snack } = req.body;
    const requestDate = req.body.date || new Date();

    const currentDate = new Date(requestDate);
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const endOfDay = new Date(startOfDay);
    endOfDay.setHours(23, 59, 59, 999);

    const existingFoodEntry = await Food.findOne({ owner, date: { $gte: startOfDay, $lte: endOfDay } });
    let savedFoodEntry = null;

    if (existingFoodEntry) {
        if (breakfast) {
            existingFoodEntry.breakfast = existingFoodEntry.breakfast.concat(breakfast);
        }
        if (lunch) {
            existingFoodEntry.lunch = existingFoodEntry.lunch.concat(lunch);
        }
        if (dinner) {
            existingFoodEntry.dinner = existingFoodEntry.dinner.concat(dinner);
        }
        if (snack) {
            existingFoodEntry.snack = existingFoodEntry.snack.concat(snack);
        }
        savedFoodEntry = await existingFoodEntry.save();
    } else {
        const foodEntry = new Food({
            owner,
            date: currentDate,
            breakfast,
            lunch,
            dinner,
            snack,
        });
        savedFoodEntry = await foodEntry.save();
    }

    // const existingWaterEntry = await Water.findOne({ owner, date: { $gte: startOfDay, $lte: endOfDay } });

    // const nutrientsBreakfast = nutrientsByFoodType(savedFoodEntry, 'breakfast');
    // const nutrientsLunch = nutrientsByFoodType(savedFoodEntry, 'lunch');
    // const nutrientsDinner = nutrientsByFoodType(savedFoodEntry, 'dinner');
    // const nutrientsSnack = nutrientsByFoodType(savedFoodEntry, 'snack');
    // const nutrientsTotal = nutrientsTotalPerDay(user, existingWaterEntry, savedFoodEntry);

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

    const breakfastTotal = nutrientsTotalPerTime(breakfastDishes);
    const lunchTotal = nutrientsTotalPerTime(lunchDishes);
    const dinnerTotal = nutrientsTotalPerTime(dinnerDishes);
    const snackTotal = nutrientsTotalPerTime(snackDishes);

    res.status(200).json({
        breakfast: breakfastTotal,
        lunch: lunchTotal,
        dinner: dinnerTotal,
        snack: snackTotal,
        breakfastDishes,
        lunchDishes,
        dinnerDishes,
        snackDishes,
    });
});

module.exports = { foodIntake };
