const { RecommendedFood } = require('../../models');
const { asyncHandler } = require('../../utils');
const { throwHttpError } = require('../../utils/throwHttpError');

const getRecommendedFood = async (req, res) => {
    const { count } = req.query;

    const countValid = Number(count);
    if (!countValid || !Number.isInteger(countValid)) {
        throwHttpError(400, 'Count not specified or incorrect');
    }

    const allRecommendedFood = await RecommendedFood.find();
        if (!allRecommendedFood) {
            throwHttpError(404, 'Not Found');
        }
    function getRandomItems(array, n) {
        const shuffled = array.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    const randomItems = getRandomItems(allRecommendedFood, count);

    res.status(200).json(randomItems);
};

module.exports = { getRecommendedFood: asyncHandler(getRecommendedFood) };
