// В цьому каталозі створюємо контролери для роботи з користувачем
// (додавання води, їжі, вибірки для статистики тощо).
// Створив один контролер для прикладу.

const { addGoal } = require('./addGoal');
const { updatedFoodIntake } = require('./updatedFoodIntake');
const { waterIntake } = require('./waterIntake');
const { getRecommendedFood } = require('./getRecommendedFood');
const { weight } = require('./weight');
const { foodIntake } = require('./foodIntake');
const { getStatistics } = require('./getStatistics');
const { getGraph } = require('./getGraph');

module.exports = {
    addGoal,
    waterIntake,
    updatedFoodIntake,
    getRecommendedFood,
    weight,
    foodIntake,
    getStatistics,
    getGraph,
};
