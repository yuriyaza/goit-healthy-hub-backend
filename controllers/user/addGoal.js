const { Users } = require('../../models');
const { asyncHandler } = require('../../utils');

const addGoal = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { goal } = req.body;

    const updatedUser = await Users.findByIdAndUpdate(_id, { goal }, { returnDocument: 'after' });

    res.status(200).json({
        goal: updatedUser.goal,
    });
});

module.exports = { addGoal };
