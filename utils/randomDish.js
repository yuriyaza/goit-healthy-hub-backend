const { calculateBMR } = require('./calculateBMR');
const { randomInteger } = require('./randomInteger');

function randomDish(user, dishesList, delta) {
    const userBMR = calculateBMR(user);
    const { calories, protein, fat, carbohydrates } = userBMR;

    const randomIndex = randomInteger(0, dishesList.length - 1);
    const randomFoodDelta = randomInteger(100 - delta, 100 + delta) / 100;

    const dish = {
        name: dishesList[randomIndex],
        calories: Math.round((calories * randomFoodDelta) / 6),
        protein: parseFloat((protein * randomFoodDelta) / 6).toFixed(2),
        fat: parseFloat((fat * randomFoodDelta) / 6).toFixed(2),
        carbohydrates: parseFloat((carbohydrates * randomFoodDelta) / 6).toFixed(2),
    };

    return dish;
}

module.exports = { randomDish };
