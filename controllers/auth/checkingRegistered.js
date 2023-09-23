const { Users } = require('../../models');
const { asyncHandler, throwHttpError } = require('../../utils');

const checkingRegistered = async (req, res) => {
    const { email } = req.body;
    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    } else {
        res.status(200).json({ message: 'User not found' });
    }
};
module.exports = { checkingRegistered: asyncHandler(checkingRegistered) };
