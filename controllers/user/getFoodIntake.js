const { Food } = require('../../models');
const { nutrientsTotalPerTime, asyncHandler } = require('../../utils');

const getFoodIntake = asyncHandler(async (req, res) => {
    const owner = String(req.user._id);
    const requestDate = req.body.date || new Date();

    const beginDate = new Date(requestDate);
    const endDate = new Date(requestDate);
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    let breakfastDishes = [];
    let lunchDishes = [];
    let dinnerDishes = [];
    let snackDishes = [];

    const foodData = await Food.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });

    if (foodData) {
        breakfastDishes = foodData.breakfast;
        lunchDishes = foodData.lunch;
        dinnerDishes = foodData.dinner;
        snackDishes = foodData.snack;
    }

    const breakfastTotal = nutrientsTotalPerTime(breakfastDishes);
    const lunchTotal = nutrientsTotalPerTime(lunchDishes);
    const dinnerTotal = nutrientsTotalPerTime(dinnerDishes);
    const snackTotal = nutrientsTotalPerTime(snackDishes);

     res.status(200).json({
        breakfastTotal,
        lunchTotal,
        dinnerTotal,
        snackTotal,
        breakfastDishes,
        lunchDishes,
        dinnerDishes,
        snackDishes,
    });
});

module.exports = { getFoodIntake };
