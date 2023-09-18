const { Weight } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const weight = asyncHandler(async (req, res) => {
    const { _id: owner } = req.user;
    const { weight: newWeight, date } = req.body;

    const currentUser = await Weight.findOne({ owner });
    if (!currentUser) {
        throwHttpError(404, 'User not found');
    }

    const updatedUser = await Weight.findByIdAndUpdate(currentUser._id, { weight: newWeight, date }, { new: true });
    if (!updatedUser) {
        throwHttpError(404, 'User not found');
    }

    res.status(200).json(updatedUser);
});

module.exports = { weight };
