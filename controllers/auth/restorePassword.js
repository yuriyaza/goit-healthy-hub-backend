const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');

const { Users } = require('../../models');
const { asyncHandler, throwHttpError, sendRestoreEmail } = require('../../utils');

const restorePassword = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
        throwHttpError(400, 'User not found');
    }

    const newPassword = nanoid();
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Users.findByIdAndUpdate(user._id, { password: hashedPassword }, { returnDocument: 'after' });
    await sendRestoreEmail(user.name, user.email, newPassword);

    res.status(200).json({
        message: 'New password sent to email',
    });
});

module.exports = { restorePassword };
