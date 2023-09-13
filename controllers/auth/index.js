const { currentUser } = require('./currentUser');
const { registerUser } = require('./registerUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { verifyUser } = require('./verifyUser');
const { resendCode } = require('./resendCode');
const { updateAvatar } = require('./updateAvatar');

module.exports = {
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    verifyUser,
    resendCode,
    updateAvatar,
};
