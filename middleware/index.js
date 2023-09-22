const { authentication } = require('./authentication');
const { downloadFromClient } = require('./downloadFromClient');
const { validateID } = require('./validateID');
const { validateRequest } = require('./validateRequest');

module.exports = {
    authentication,
    downloadFromClient,
    validateID,
    validateRequest,
};
