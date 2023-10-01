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
    middleware.validateID,
    middleware.validateRequest(schema.validateDish),
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

userRoutes.get(
    '/statistics',
    middleware.authentication,
    middleware.validateRequest(schema.validateDate),
    controller.getStatistics
);

userRoutes.get(
    '/graph',
    middleware.authentication,
    controller.getGraph
);

userRoutes.get(
    '/graph-v2',
    middleware.authentication,
    controller.getGraphV2
);

userRoutes.get(
    '/food-intake',
    middleware.authentication,
    middleware.validateRequest(schema.foodSchema),
    controller.getFoodIntake
);

userRoutes.post(
    '/food-intake',
    middleware.authentication,
    middleware.validateRequest(schema.foodSchema),
    controller.foodIntake
);

userRoutes.post(
    '/food-intake-v2',
    middleware.authentication,
    middleware.validateRequest(schema.foodSchema),
    controller.foodIntakeV2
);

userRoutes.post(
    '/generate-demo',
    middleware.authentication,
    middleware.validateRequest(schema.validateDemo),
    controller.generateDemo
);

module.exports = { userRoutes };
