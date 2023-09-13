const bcrypt = require('bcrypt');
const path = require('node:path');
const { nanoid } = require('nanoid');

const { Users } = require('../../models/auth');
const { asyncHandler, throwHttpError, sendVerificationEmail } = require('../../utils');

const registerUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = nanoid();
    const defaultAvatar = path.join(__dirname, '..', '..', 'public', 'avatars', 'default.png');

    const newUser = await Users.create({ ...request.body, avatarURL: defaultAvatar, password: hashedPassword, verificationCode });
    await sendVerificationEmail(newUser.email, newUser.verificationCode);

    response.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL,
        },
    });
});

module.exports = { registerUser };
