const { Users } = require('../../models');
const { asyncHandler } = require('../../utils');

const logoutUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    await Users.findByIdAndUpdate(_id, { token: null }, { returnDocument: 'after' });

    res.status(200).json({
        message: 'Logout successful',
    });
});

module.exports = { logoutUser };
