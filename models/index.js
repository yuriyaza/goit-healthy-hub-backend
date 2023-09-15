const { Users } = require('./userModel');
const { Food } = require('./foodModel');
const { Water } = require('./waterModel');
const { RecommendedFood } = require('./recommendedFoodModal');

const { foodSchema } = require('./foodSchema');
const { waterSchema } = require('./waterSchema');
const { validateRegister } = require('./validateRegister');
const { validateLogin } = require('./validateLogin');
const { validateEmail } = require('./validateEmail');
const { validateGoal } = require('./validateGoal');

module.exports = {
    Users,
    Food,
    Water,
    RecommendedFood,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
    foodSchema,
    waterSchema,
};
