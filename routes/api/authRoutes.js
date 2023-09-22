// В цьому файлі розміщені роути для авторизації
// (реєстрація, логін, відновлення паролю тощо).

const express = require('express');
const authRoutes = express.Router();

const schema = require('../../models');
const middleware = require('../../middleware');
const controller = require('../../controllers/auth');

authRoutes.get(
    '/current',
    middleware.authentication,
    controller.currentUser
);

authRoutes.post(
    '/register',
    middleware.validateRequest(schema.validateRegister),
    controller.registerUser
);

authRoutes.post(
    '/login',
    middleware.validateRequest(schema.validateLogin),
    controller.loginUser
);

authRoutes.post(
    '/logout',
    middleware.authentication,
    controller.logoutUser
);

authRoutes.post(
    '/restore',
    middleware.validateRequest(schema.validateEmail),
    controller.restorePassword
);

authRoutes.patch(
    '/avatar',
    middleware.authentication,
    middleware.downloadFromClient.single('file'),
    controller.updateAvatar
);

authRoutes.patch(
    '/settings',
    middleware.authentication,
    middleware.validateRequest(schema.validateSettings),
    controller.userSettings
);

module.exports = { authRoutes };
