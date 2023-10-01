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
const { getGraphV2 } = require('./getGraph-v2');
const { getFoodIntake } = require('./getFoodIntake');
const { foodIntakeV2 } = require('./foodIntake-v2');
const { generateDemo } = require('./generateDemo');

module.exports = {
    addGoal,
    waterIntake,
    updatedFoodIntake,
    getRecommendedFood,
    weight,
    foodIntake,
    getStatistics,
    getGraph,
    getGraphV2,
    getFoodIntake,
    foodIntakeV2,
    generateDemo,
};
