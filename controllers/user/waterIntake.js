const { Water } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const waterIntake = async (req, res) => {
    const { _id: owner } = req.user;
    const { water: newWater, date } = req.body;

    const currentUser = await Water.findOne({ owner });
    if (!currentUser) {
        throwHttpError(404, 'User not found');
    }

    const currentWaterIntake = currentUser.water || 0;
    const updatedWaterIntake = currentWaterIntake + newWater;
    const updatedUser = await Water.findByIdAndUpdate(currentUser._id, { water: updatedWaterIntake, date }, { new: true });
    if (!updatedUser) {
        throwHttpError(404, 'User not found');
    }

    res.status(200).json(updatedUser);
};

module.exports = { waterIntake: asyncHandler(waterIntake) };
