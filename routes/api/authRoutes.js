const express = require('express');
const authRoutes = express.Router();

const middleware = require('../../middleware');
const schema = require('../../models/auth');
const controller = require('../../controllers/auth');

authRoutes.get(
    '/current',
    middleware.authentication,
    controller.currentUser
);
authRoutes.post(
    '/register',
    middleware.validateRequest(schema.authAllSchema),
    controller.registerUser
);
authRoutes.post(
    '/login',
    middleware.validateRequest(schema.authAllSchema),
    controller.loginUser
);
authRoutes.post(
    '/logout',
    middleware.authentication,
    controller.logoutUser
);
authRoutes.get(
    '/verify/:code',
    controller.verifyUser
);
authRoutes.post(
    '/verify',
    middleware.validateRequest(schema.authEmailSchema),
    controller.resendCode
);
authRoutes.patch(
    '/avatar',
    middleware.authentication,
    middleware.uploadFiles.single('avatar'),
    controller.updateAvatar
);

module.exports = { authRoutes };
