const { Users } = require('../../models');
const { asyncHandler, throwHttpError } = require('../../utils');

const userSettings = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    // const { email, password } = req.body;

    const user = await Users.findById(_id);
    if (!user) {
        throwHttpError(400, 'User nof found');
    }

    const updatedUser = await Users.findByIdAndUpdate(user._id, { ...req.body }, { returnDocument: 'after' });

    res.status(201).json({
        name: updatedUser.name,
        email: updatedUser.email,
        gender: updatedUser.gender,
        age: updatedUser.age,
        height: updatedUser.height,
        weight: updatedUser.weight,
        activity: updatedUser.activity,
        goal: updatedUser.goal,
        avatar: updatedUser.avatar,
    });
});

module.exports = { userSettings };
