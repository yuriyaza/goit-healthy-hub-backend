function nutrientsTotalPerTime(foodData) {
    // Створюємо об'єкт з початковими значеннями
    const nutrients = {
        calories: 0,
        carbohydrates: 0,
        protein: 0,
        fat: 0,
    };

    // Якщо дані про їжу внесено - додаємо їх до об'єкту
    if (foodData) {
        foodData.forEach(dish => {
            nutrients.calories = parseFloat((nutrients.calories + dish.calories).toFixed(0));
            nutrients.carbohydrates = parseFloat((nutrients.carbohydrates + dish.carbohydrates).toFixed(2));
            nutrients.protein = parseFloat((nutrients.protein + dish.protein).toFixed(2));
            nutrients.fat = parseFloat((nutrients.fat + dish.fat).toFixed(3));
        });
    }

    // Передаємо сформований об'єкт на Frontend.
    // Якщо якісь дані не були внесені - на Frontend передаємо '0' (початкове значення)
    return nutrients;
}

module.exports = { nutrientsTotalPerTime };
