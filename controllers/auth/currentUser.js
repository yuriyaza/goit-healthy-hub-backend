const { asyncHandler } = require('../../utils');

const currentUser = asyncHandler(async (request, response) => {
    const { email, subscription, avatarURL } = request.user;

    response.status(200).json({
        user: {
            email,
            subscription,
            avatarURL,
        },
    });
});

module.exports = { currentUser };
