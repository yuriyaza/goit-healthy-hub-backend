// В цей файл додаємо роути для роботи з користувачем
// (додавання води, їжі, вибірки для статистики тощо)

const express = require('express');
const userRoutes = express.Router();

const schema = require('../../models');
const middleware = require('../../middleware');
const controller = require('../../controllers/user');

userRoutes.patch(
    '/goal',
    middleware.authentication,
    middleware.validateRequest(schema.validateGoal),
    controller.addGoal
);

module.exports = { userRoutes };
