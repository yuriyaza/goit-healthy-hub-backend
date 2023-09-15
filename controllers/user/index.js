// В цьому каталозі створюємо контролери для роботи з користувачем
// (додавання води, їжі, вибірки для статистики тощо).
// Створив один контролер для прикладу.

const { addGoal } = require('./addGoal');
const { updatedFoodIntake } = require('./updatedFoodIntake');
const { waterIntake } = require('./waterIntake');
const { getRecommendedFood } = require('./getRecommendedFood');

module.exports = {
    addGoal,
    waterIntake,
    updatedFoodIntake,
    getRecommendedFood,
};
