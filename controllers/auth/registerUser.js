const bcrypt = require('bcrypt');
const path = require('node:path');

const { Users } = require('../../models');
const { asyncHandler, throwHttpError } = require('../../utils');

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const defaultAvatar = path.join(__dirname, '..', '..', 'public', 'avatars', 'default.png');

    const registeredUser = await Users.create({ ...req.body, avatar: defaultAvatar, password: hashedPassword });

    res.status(201).json({
        name: registeredUser.name,
        email: registeredUser.email,
        gender: registeredUser.gender,
        age: registeredUser.age,
        height: registeredUser.height,
        weight: registeredUser.weight,
        activity: registeredUser.activity,
        goal: registeredUser.goal,
        avatar: registeredUser.avatar,
    });
});

module.exports = { registerUser };
