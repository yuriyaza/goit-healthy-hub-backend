function nutrientsByFoodType(foodData, foodType) {
    // Створюємо об'єкт з початковими значеннями
    const nutrients = {
        calories: 0,
        carbohydrates: 0,
        protein: 0,
        fat: 0,
    };

    // Якщо дані про їжу внесено - додаємо їх до об'єкту по [foodType]  - сніданок, обід, вечеря, ...
    if (foodData) {
        foodData[foodType].forEach(dish => {
            nutrients.calories = parseFloat((nutrients.calories + dish.calories).toFixed(0));
            nutrients.carbohydrates = parseFloat((nutrients.carbohydrates + dish.carbohydrates).toFixed(2));
            nutrients.protein = parseFloat((nutrients.protein + dish.protein).toFixed(2));
            nutrients.fat = parseFloat((nutrients.fat + dish.fat).toFixed(2));
        });
    }

    // Передаємо сформований об'єкт на Frontend.
    // Якщо якісь дані не були внесені - на Frontend передаємо '0' (початкове значення)
    return nutrients;
}

module.exports = { nutrientsByFoodType };
