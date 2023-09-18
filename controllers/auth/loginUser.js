const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models');
const { asyncHandler, throwHttpError } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
        throwHttpError(401, 'Incorrect email or password');
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
        throwHttpError(401, 'Incorrect email or password');
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '30d' });
    const loggedUser = await Users.findByIdAndUpdate(user._id, { token }, { returnDocument: 'after' });

    res.status(201).json({
        name: loggedUser.name,
        email: loggedUser.email,
        gender: loggedUser.gender,
        age: loggedUser.age,
        height: loggedUser.height,
        weight: loggedUser.weight,
        activity: loggedUser.activity,
        goal: loggedUser.goal,
        avatar: loggedUser.avatar,
        token: loggedUser.token,
    });
});

module.exports = { loginUser };
