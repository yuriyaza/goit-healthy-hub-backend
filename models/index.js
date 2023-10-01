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
const { weightSchema } = require('./weightSchema');
const { validateDate } = require('./validateDate');
const { emailSchema } = require('./checkingRegisteredSchema');
const { validateSettings } = require('./validateSettings');
const { validateDish } = require('./validateDish');
const { validateDemo } = require('./validateDemo');

module.exports = {
    Users,
    Weight,
    Food,
    Water,
    RecommendedFood,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
    foodSchema,
    waterSchema,
    weightSchema,
    validateDate,
    emailSchema,
    validateSettings,
    validateDish,
    validateDemo,
};
