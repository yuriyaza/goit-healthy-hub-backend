const format = require('date-fns/format');

const { Food, Water, Weight } = require('../../models');
const { createPeriod, createGraphData, createGraphLabels, asyncHandler, throwHttpError } = require('../../utils');

const getGraphV2 = asyncHandler(async (req, res) => {
    const owner = String(req.user._id);
    const daysCount = Number(req.query.period);

    if (!daysCount || !Number.isInteger(daysCount)) {
        throwHttpError(400, 'Period not specified or incorrect');
    }

    const beginDate = createPeriod(daysCount).begin;
    const endDate = createPeriod(daysCount).end;

    // Header
    const labels = createGraphLabels(beginDate, endDate);
    
    // Weight information
    const weightData = await Weight.find({ owner, date: { $gte: beginDate, $lte: endDate } }).sort({ date: 1 });
    const weightDatesList = [];
    const weightValuesList = [];

    weightData.forEach(day => {
        weightDatesList.push(format(day.date, 'yyyy-MM-dd'));
        weightValuesList.push(day.weight);
    });
    const weight = createGraphData(daysCount, weightDatesList, weightValuesList);

    // Water information
    const waterData = await Water.find({ owner, date: { $gte: beginDate, $lte: endDate } }).sort({ date: 1 });
    const waterDatesList = [];
    const waterValuesList = [];

    waterData.forEach(day => {
        waterDatesList.push(format(day.date, 'yyyy-MM-dd'));
        waterValuesList.push(day.water);
    });
    const water = createGraphData(daysCount, waterDatesList, waterValuesList);

    // Food information
    const foodData = await Food.find({ owner, date: { $gte: beginDate, $lte: endDate } }).sort({ date: 1 });
    const caloriesDatesList = [];
    const caloriesValuesList = [];

    foodData.forEach(day => {
        const breakfastCalories = day.breakfast.reduce((acc, dish) => acc + dish.calories, 0);
        const lunchCalories = day.lunch.reduce((acc, dish) => acc + dish.calories, 0);
        const dinnerCalories = day.dinner.reduce((acc, dish) => acc + dish.calories, 0);
        const snackCalories = day.snack.reduce((acc, dish) => acc + dish.calories, 0);
        const totalCalories = Math.round(breakfastCalories + lunchCalories + dinnerCalories + snackCalories);
        caloriesDatesList.push(format(day.date, 'yyyy-MM-dd'));
        caloriesValuesList.push(totalCalories);
    });
    const calories = createGraphData(daysCount, caloriesDatesList, caloriesValuesList);

    res.status(200).json({
        labels,
        days: calories.days,
        calories: calories.values,
        water: water.values,
        weight: weight.values,
    });
});

module.exports = { getGraphV2 };
