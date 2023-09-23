const cloudinary = require('cloudinary').v2;

require('dotenv').config();
const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;
const DESTINATION_FOLDER = 'goit-healthy-hub-db/avatars';

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET,
    secure: true,
});

async function uploadToCloudinary(fileName) {
    try {
        const options = {
            folder: DESTINATION_FOLDER,
            use_filename: true,
            unique_filename: false,
            overwrite: true,
        };

        const uploadedFileResponse = await cloudinary.uploader.upload(fileName, options);
        return uploadedFileResponse;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { uploadToCloudinary };
