const format = require('date-fns/format');
const addDays = require('date-fns/addDays');
const differenceInDays = require('date-fns/differenceInDays');
// const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { randomInteger } = require('../../utils');

const { RecommendedFood, Users, Food, Water, Weight } = require('../../models');
const { randomDish, asyncHandler } = require('../../utils');

const generateDemo = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { begin, end, clearAllBeforeGenerate } = req.body;
    const delta = req.body.delta || 20;

    const owner = String(_id);
    const foodDatabaseEntry = [];
    const waterDatabaseEntry = [];
    const weightDatabaseEntry = [];

    const beginDate = new Date(begin);
    const endDate = new Date(end);
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    const daysCount = differenceInDays(endDate, beginDate);

    // Отримуємо параметри користувача та перелік рекомендованих страв
    const user = await Users.findById(_id);
    const food = await RecommendedFood.aggregate([
        // prettier-ignore
        { $group: { _id: new ObjectId(), names: { $push: '$name' } } },
        { $project: { _id: false, names: true } },
    ]);
    const dishesList = food[0].names;

    // Генеруємо демонстраційні дані за період
    for (let i = 0; i <= daysCount; i += 1) {
        const date = addDays(beginDate, i);
        date.setHours(12, 0, 0, 0);

        const foodDocumentEntry = {
            date,
            owner,
            breakfast: [randomDish(user, dishesList, delta), randomDish(user, dishesList, delta)],
            lunch: [randomDish(user, dishesList, delta), randomDish(user, dishesList, delta)],
            dinner: [randomDish(user, dishesList, delta), randomDish(user, dishesList, delta)],
        };
        foodDatabaseEntry.push(foodDocumentEntry);

        const randomWaterDelta = randomInteger(100 - delta, 100 + delta) / 100;
        const waterDocumentEntry = {
            date,
            owner,
            water: Math.round(1500 * randomWaterDelta),
        };
        waterDatabaseEntry.push(waterDocumentEntry);

        const randomWeightDelta = randomInteger(-1, 1);
        const weightDocumentEntry = {
            date,
            owner,
            weight: Math.round(user.weight + randomWeightDelta),
        };
        weightDatabaseEntry.push(weightDocumentEntry);
    }

    // Записуємо демонстраційні дані до БД, очищаємо попередні
    if (!clearAllBeforeGenerate) {
        await Food.deleteMany({ owner, date: { $gte: beginDate, $lte: endDate } });
        await Water.deleteMany({ owner, date: { $gte: beginDate, $lte: endDate } });
        await Weight.deleteMany({ owner, date: { $gte: beginDate, $lte: endDate } });
    } else {
        await Food.deleteMany({ owner });
        await Water.deleteMany({ owner });
        await Weight.deleteMany({ owner });
    }

    await Food.create(...foodDatabaseEntry);
    await Water.create(...waterDatabaseEntry);
    await Weight.create(...weightDatabaseEntry);

    res.status(200).json({
        message: 'Demo data successfully generated',
        begin,
        end,
    });
});

module.exports = { generateDemo };
