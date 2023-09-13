function asyncHandler(func) {

    return async function wrapper(request, response, next) {
        try {
            await func(request, response, next);
        }
        catch (error) {
            next(error);
        }
    };

}

module.exports = { asyncHandler };
