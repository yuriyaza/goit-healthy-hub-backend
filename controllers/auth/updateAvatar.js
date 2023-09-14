const path = require('node:path');
const fs = require('node:fs/promises');
const sharp = require('sharp');

const { Users } = require('../../models');
const { asyncHandler } = require('../../utils');

const updateAvatar = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { filename } = req.file;

    const tempFile = path.join(__dirname, '..', '..', 'temp', filename);
    const destFile = path.join(__dirname, '..', '..', 'public', 'avatars', filename);
    const avatar = path.join('/', 'avatars', filename);

    await sharp(tempFile).resize(250, 250, 'contain').toFile(destFile);
    await fs.unlink(tempFile);

    const updatedUser = await Users.findByIdAndUpdate(_id, { avatar }, { returnDocument: 'after' });

    res.status(200).json({
        user: {
            avatar: updatedUser.avatar
        },
    });
});

module.exports = { updateAvatar };
