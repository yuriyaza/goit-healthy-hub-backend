const { Food } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const foodIntake = asyncHandler(async (req, res) => {
    const { _id: owner } = req.user;
    const { date, breakfast, lunch, dinner, snack } = req.body;

    try {
        const currentDate = new Date(date);
        const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const endOfDay = new Date(startOfDay);
        endOfDay.setHours(23, 59, 59, 999);

        let existingFoodEntry = await Food.findOne({ owner, date: { $gte: startOfDay, $lte: endOfDay } });

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

            await existingFoodEntry.save();
            res.status(200).json(existingFoodEntry);
        } else {
            const foodEntry = new Food({
                owner,
                date: currentDate,
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
