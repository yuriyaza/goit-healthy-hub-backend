const multer = require('multer');
const path = require('node:path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destDir = path.join(__dirname, '..', 'public', 'avatars');
        cb(null, destDir);
    },

    filename: function (req, file, cb) {
        const userID = req.user._id;
        const originalFileName = file.originalname;
        const fileExt = path.parse(originalFileName).ext;

        const destFileName = `${userID}${fileExt}`;
        cb(null, destFileName);
    },

    limits: {
        files: 1,
    },
});

const downloadFromClient = multer({ storage });

module.exports = { downloadFromClient };
