const { throwHttpError } = require('../utils');

function validateRequest(schema) {

    return function handler(req, res, next) {
        const validateResult = schema.validate(req.body);

        if (validateResult.error) {
            let errorMessage = validateResult.error.message;
            errorMessage = errorMessage.replaceAll('"', '');
            errorMessage = errorMessage[0].toUpperCase() + errorMessage.slice(1);

            throwHttpError(400, errorMessage);
        }
        
        next();
    };

}

module.exports = { validateRequest };
