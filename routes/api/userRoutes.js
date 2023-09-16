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

userRoutes.put(
    '/food-intake/:id',
    middleware.authentication,
    middleware.validateRequest(schema.foodSchema),
    controller.updatedFoodIntake
);
userRoutes.post(
    '/water-intake',
    middleware.authentication,
    middleware.validateRequest(schema.waterSchema),
    controller.waterIntake
);
userRoutes.get(
    '/recommended-food',
    middleware.authentication,
    controller.getRecommendedFood
);

userRoutes.put(
    '/weight',
    middleware.authentication,
    middleware.validateRequest(schema.weightSchema),
    controller.weight
);

userRoutes.post(
    '/food-intake',
    middleware.authentication,
    middleware.validateRequest(schema.foodSchema),
    controller.foodIntake
);

module.exports = { userRoutes };
