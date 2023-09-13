const { Users } = require('../../models/auth');
const { asyncHandler, throwHttpError, sendVerificationEmail } = require('../../utils');

const resendCode = asyncHandler(async (request, response) => {
    const { email } = request.body;

    const user = await Users.findOne({ email });
    if (!user) {
        throwHttpError(400, 'Email not found');
    }

    const isVerified = user.verifiedStatus;
    if (isVerified) {
        throwHttpError(400, 'Email already verified');
    }

    await sendVerificationEmail(user.email, user.verificationCode);

    response.status(200).json({
        message: 'Verification email sent',
    });
});

module.exports = { resendCode };
