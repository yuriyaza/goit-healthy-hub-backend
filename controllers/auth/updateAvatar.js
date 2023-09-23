const path = require('node:path');
const fs = require('node:fs/promises');
const sharp = require('sharp');

const { Users } = require('../../models/userModel');
const { uploadToCloudinary, asyncHandler, throwHttpError } = require('../../utils');

const updateAvatar = asyncHandler(async (req, res) => {
    if (!req.file) {
        throwHttpError(400, 'File not specified');
    }
    const { filename } = req.file;
    const { _id } = req.user;

    const sourceFile = path.join(__dirname, '..', '..', 'public', 'avatars', filename);
    sharp(sourceFile).resize(200, 200, 'contain');
    
    const uploadedFile = await uploadToCloudinary(sourceFile);
    if (!uploadedFile) { 
        throwHttpError('500', `Error uploading avatar to File Server, ${uploadedFile}`);
    }
    await fs.unlink(sourceFile);
    
    const updatedUser = await Users.findByIdAndUpdate(_id, { avatar: uploadedFile.secure_url }, { returnDocument: 'after' });

    res.status(200).json({
        avatar: updatedUser.avatar,
    });
});

module.exports = { updateAvatar };
