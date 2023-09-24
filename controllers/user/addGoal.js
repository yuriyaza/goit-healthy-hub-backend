const { Users, Food, Water } = require('../../models');
const { nutrientsTotalPerDay, asyncHandler } = require('../../utils');

const addGoal = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { goal } = req.body;
    
    const user = req.user;
    const owner = String(_id);
    
    const beginDate = new Date();
    const endDate = new Date();
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const updatedUser = await Users.findByIdAndUpdate(_id, { goal }, { returnDocument: 'after' });

    // Розрахунок даних, які змінюються при оновленні цілі - для відображення змін в інтерфейсі
    const foodData = await Food.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });
    const waterData = await Water.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });
    const total = nutrientsTotalPerDay(user, waterData, foodData);

    res.status(200).json({
        goal: updatedUser.goal,
        total,
    });
});

module.exports = { addGoal };
