function asyncHandler(func) {

    return async function wrapper(req, res, next) {
        try {
            await func(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };

}

module.exports = { asyncHandler };
