const errorMessages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
};

function throwHttpError(code, message = errorMessages[code]) {
    const setError = new Error(message);
    setError.code = code;
    throw setError;
}

module.exports = { throwHttpError };
