const { Food } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const foodIntake = asyncHandler(async (req, res) => {
    const { _id: owner } = req.user;
    const { date, breakfast, lunch, dinner, snack } = req.body;

    const foodEntry = new Food({
        owner,
        date,
        breakfast,
        lunch,
        dinner,
        snack,
    });

    try {
        const savedFoodEntry = await foodEntry.save();
        res.status(201).json(savedFoodEntry);
    } catch (error) {
        throwHttpError(500, 'Error saving food entry');
    }
});

module.exports = { foodIntake };
