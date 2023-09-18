const { authentication } = require('./authentication');
const { uploadFiles } = require('./uploadFiles');
const { validateID } = require('./validateID');
const { validateRequest } = require('./validateRequest');
const { uploadCloud } = require('./uploadCloudinary');

module.exports = {
    authentication,
    uploadFiles,
    validateID,
    validateRequest,
    uploadCloud,
};
