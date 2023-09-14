const { isValidObjectId } = require('mongoose');
const { throwHttpError } = require('../utils');

function validateID(req, res, next) {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        throwHttpError(400, 'Incorrect ID');
    }

    next();
}

module.exports = { validateID };
