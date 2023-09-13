const path = require('node:path');
const fs = require('node:fs/promises');
const sharp = require('sharp');

const { Users } = require('../../models/auth');
const { asyncHandler } = require('../../utils');

const updateAvatar = asyncHandler(async (request, response) => {
    const { _id } = request.user;
    const { filename } = request.file;

    const tempFile = path.join(__dirname, '..', '..', 'temp', filename);
    const destFile = path.join(__dirname, '..', '..', 'public', 'avatars', filename);
    const avatarURL = path.join('/', 'avatars', filename);

    await sharp(tempFile).resize(250, 250, 'contain').toFile(destFile);
    await fs.unlink(tempFile);

    const updatedUser = await Users.findByIdAndUpdate(_id, { avatarURL }, { returnDocument: 'after' });

    response.status(200).json({
        user: {
            avatarURL: updatedUser.avatarURL
        },
    });
});

module.exports = { updateAvatar };
