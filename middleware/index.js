const { authentication } = require('./authentication');
const { uploadFiles } = require('./uploadFiles');
const { validateID } = require('./validateID');
const { validateRequest } = require('./validateRequest');

module.exports = {
    authentication,
    uploadFiles,
    validateID,
    validateRequest,
};
