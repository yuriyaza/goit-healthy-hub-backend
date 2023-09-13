const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models/auth');
const { asyncHandler, throwHttpError } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const loginUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    const user = await Users.findOne({ email });
    if (!user) {
        throwHttpError(401, 'Incorrect email or password');
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
        throwHttpError(401, 'Incorrect email or password');
    }

    const isEmailVerified = user.verifiedStatus;
    if (!isEmailVerified) {
        throwHttpError(401, 'Email is not verified');
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '24h' });
    const loggedUser = await Users.findByIdAndUpdate(user._id, { token }, { returnDocument: 'after' });

    response.status(201).json({
        user: {
            email: loggedUser.email,
            subscription: loggedUser.subscription,
            avatarURL: loggedUser.avatarURL,
        },
        token,
    });
});

module.exports = { loginUser };
