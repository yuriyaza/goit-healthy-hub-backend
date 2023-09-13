const jwt = require('jsonwebtoken');

const { Users } = require('../models/auth');
const { asyncHandler, throwHttpError } = require('../utils');

require('dotenv').config();
const { TOKEN_KEY } = process.env;

const authentication = asyncHandler(async function (request, response, next) {
    const { authorization: authHeader } = request.headers;
    if (!authHeader) {
        throwHttpError(401, 'Unauthorized');
    }

    const [prefix, token] = authHeader.split(' ', 2);
    if (prefix !== 'Bearer' || !token) {
        throwHttpError(401, 'Unauthorized');
    }

    const payload = jwt.verify(token, TOKEN_KEY, (error, data) => {
        if (error) {
            throwHttpError(401, 'Invalid or expired token');
        }
        return data;
    });

    const { id } = payload;
    const user = await Users.findById(id);
    if (!user || !user.token) {
        throwHttpError(401, 'Unauthorized');
    }

    request.user = user;
    next();
});

module.exports = { authentication };
