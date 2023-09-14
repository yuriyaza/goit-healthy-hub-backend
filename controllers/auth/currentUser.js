const { asyncHandler } = require('../../utils');

const currentUser = asyncHandler(async (req, res) => {
    const currentUser = req.user;

    res.status(200).json({
        name: currentUser.name,
        email: currentUser.email,
        gender: currentUser.gender,
        age: currentUser.age,
        height: currentUser.height,
        weight: currentUser.weight,
        activity: currentUser.activity,
        goal: currentUser.goal,
        avatar: currentUser.avatar,
    });
});

module.exports = { currentUser };
