const { Users } = require('./userModel');
const { validateRegister } = require('./validateRegister');
const { validateLogin } = require('./validateLogin');
const { validateEmail } = require('./validateEmail');
const { validateGoal } = require('./validateGoal');

module.exports = {
    Users,
    validateRegister,
    validateLogin,
    validateEmail,
    validateGoal,
};
