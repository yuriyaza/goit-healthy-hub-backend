const { calculateBMR } = require('../utils/calculateBMR');

function nutrientsTotalPerDay(user, waterData, foodData) {
    // Створюємо об'єкт з початковими значеннями
    const nutrients = {
        water: { goal: 1500, used: 0 },
        calories: { goal: 0, used: 0 },
        carbohydrates: { goal: 170, used: 0 },
        protein: { goal: 127.5, used: 0 },
        fat: { goal: 56, used: 0 },
    };

    // Вираховуємо денний рівень калорій, необхідний для підтримання маси тіла
    nutrients.calories.goal = calculateBMR(user);

    // Якщо дані про воду внесено - додаємо їх до об'єкту
    if (waterData) {
        nutrients.water.used = waterData.water.toFixed(0);
    }

    // Якщо дані про їжу внесено - сумуємо дані за день та додаємо їх до об'єкту
    if (foodData) {
        const dishes = [...foodData.breakfast, ...foodData.lunch, ...foodData.dinner, ...foodData.snack];
        dishes.forEach(dish => {
            nutrients.calories.used = parseFloat((nutrients.calories.used + dish.calories).toFixed(0));
            nutrients.carbohydrates.used = parseFloat((nutrients.carbohydrates.used + dish.carbohydrates).toFixed(2));
            nutrients.protein.used = parseFloat((nutrients.protein.used + dish.protein).toFixed(2));
            nutrients.fat.used = parseFloat((nutrients.fat.used + dish.fat).toFixed(2));
        });
    }

    // Передаємо сформований об'єкт на Frontend.
    // Якщо якісь дані не були внесені - на Frontend передаємо '0' (початкове значення)
    return nutrients;
}

module.exports = { nutrientsTotalPerDay };
