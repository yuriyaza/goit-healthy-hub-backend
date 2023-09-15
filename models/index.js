const { Users } = require('./userModel');
const { Food } = require('./foodModel');
const { validateRegister } = require('./validateRegister');
const { validateLogin } = require('./validateLogin');
const { validateEmail } = require('./validateEmail');
const { validateGoal } = require('./validateGoal');

module.exports = {
    Users,
    Food,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
};
