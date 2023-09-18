const { Users } = require('./userModel');
const { Weight } = require('./weightModel');
const { Food } = require('./foodModel');
const { Water } = require('./waterModel');
const { RecommendedFood } = require('./recommendedFoodModal');
const { foodSchema } = require('./foodSchema');
const { waterSchema } = require('./waterSchema');
const { validateRegister } = require('./validateRegister');
const { validateLogin } = require('./validateLogin');
const { validateEmail } = require('./validateEmail');
const { validateGoal } = require('./validateGoal');
const { recommendedFoodSchema } = require('./recommendedFoodSchema');

module.exports = {
    Users,
    Weight,
    Food,
    Water,
    RecommendedFood,
    recommendedFoodSchema,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
    foodSchema,
    waterSchema,
};
