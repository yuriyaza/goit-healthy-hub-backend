const multer = require('multer');
const path = require('node:path');

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        const tempDir = path.join(__dirname, '..', 'temp');
        cb(null, tempDir);
    },

    filename: function (request, file, cb) {
        const userID = request.user._id;
        const originalFileName = file.originalname;
        const fileExt = path.parse(originalFileName).ext;

        const tempFileName = `${userID}${fileExt}`
        cb(null, tempFileName);
    },

    limits: {
        files: 1,
        fileSize: 4194304,
    },
});

const uploadFiles = multer({ storage });

module.exports = { uploadFiles };
