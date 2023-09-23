const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Users } = require('../../models');
const { asyncHandler, throwHttpError } = require('../../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const isEmailExist = await Users.findOne({ email });
    if (isEmailExist) {
        throwHttpError(409, 'User already exist');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // При реєстрації кожного користувача завантажуємо дефолтну аватарку на сервер Cloudinary
    // const { uploadToCloudinary } = require('../../utils');
    // const path = require('node:path');
    // const defaultAvatar = path.join(__dirname, '..', '..', 'public', 'avatars', 'default.png');
    // const uploadedAvatar = await uploadToCloudinary(defaultAvatar);
    // if (!uploadedAvatar) { throwHttpError('500', 'Error uploading avatar to File Server') }
    // const registeredUser = await Users.create({ ...req.body, avatar: uploadedAvatar.secure_url, password: hashedPassword });

    // Альтернативний спосіб - при реєстрації прописуємо всім корисувачам вже існуючу на сервері дефолтну аватарку
    const defaultAvatar = 'https://res.cloudinary.com/dx6ikovx1/image/upload/v1695388124/goit-healthy-hub-db/avatars/default.png';
    const registeredUser = await Users.create({ ...req.body, avatar: defaultAvatar, password: hashedPassword });

    const payload = { id: registeredUser._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: '30d' });
    const loggedUser = await Users.findByIdAndUpdate(registeredUser._id, { token }, { returnDocument: 'after' });

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

module.exports = { registerUser };
