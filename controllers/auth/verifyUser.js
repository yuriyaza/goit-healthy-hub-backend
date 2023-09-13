const { asyncHandler, throwHttpError } = require('../../utils');
const { Users } = require('../../models/auth');

const verifyUser = asyncHandler(async (request, response) => {
    const { code } = request.params;

    const verifiedUser = await Users.findOneAndUpdate({ verificationCode: code }, { verifiedStatus: true });

    if (!verifiedUser) {
        throwHttpError(401, 'Invalid verification code');
    }

    response.status(200).json({
        message: 'Email verified successfully',
    });
});

module.exports = { verifyUser };
