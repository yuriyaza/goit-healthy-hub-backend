const { Food } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const foodIntake = asyncHandler(async (req, res) => {
    const { _id: owner } = req.user;
    const { date, breakfast, lunch, dinner, snack } = req.body;

    try {
        let existingFoodEntry = await Food.findOne({ owner, date });

        if (existingFoodEntry) {
            const existingBreakfast = existingFoodEntry.breakfast || [];
            const existingLunch = existingFoodEntry.lunch || [];
            const existingDinner = existingFoodEntry.dinner || [];
            const existingSnack = existingFoodEntry.snack || [];

            if (breakfast) {
                existingFoodEntry.breakfast = existingBreakfast.concat(breakfast);
            }
            if (lunch) {
                existingFoodEntry.lunch = existingLunch.concat(lunch);
            }
            if (dinner) {
                existingFoodEntry.dinner = existingDinner.concat(dinner);
            }
            if (snack) {
                existingFoodEntry.snack = existingSnack.concat(snack);
            }

            await existingFoodEntry.save();
            res.status(200).json(existingFoodEntry);
        } else {
            const foodEntry = new Food({
                owner,
                date,
                breakfast,
                lunch,
                dinner,
                snack,
            });
            const savedFoodEntry = await foodEntry.save();
            res.status(201).json(savedFoodEntry);
        }
    } catch (error) {
        throwHttpError(500, 'Error saving food entry');
    }
});

module.exports = { foodIntake };
