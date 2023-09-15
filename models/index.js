const { Users } = require('./userModel');
const { Weight } = require('./weightModel');
const { Food } = require('./foodModel');
const { Water } = require('./waterModel');
const { validateRegister } = require('./validateRegister');
const { validateLogin } = require('./validateLogin');
const { validateEmail } = require('./validateEmail');
const { validateGoal } = require('./validateGoal');

module.exports = {
    Users,
    Weight,
    Food,
    Water,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
};
