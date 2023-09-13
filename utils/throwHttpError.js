function throwHttpError(code, message) {
    const setError = new Error(message);
    setError.code = code;
    throw setError;
}

module.exports = { throwHttpError };
