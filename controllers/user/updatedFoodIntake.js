const { Food } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const updatedFoodIntake = async (req, res) => {
    const { id } = req.params;
    const updatedUser = await Food.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!updatedUser) {
        throwHttpError(404, 'not found');
    }

    res.status(200).json(updatedUser);
};

module.exports = { updatedFoodIntake: asyncHandler(updatedFoodIntake) };
