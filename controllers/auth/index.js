// В цьому каталозі розміщені контролери для авторизації
// (реєстрація, логін, відновлення паролю тощо)

const { currentUser } = require('./currentUser');
const { registerUser } = require('./registerUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { restorePassword } = require('./restorePassword');
const { updateAvatar } = require('./updateAvatar');

module.exports = {
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    restorePassword,
    updateAvatar,
};
