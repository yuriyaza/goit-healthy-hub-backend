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
            nutrients.calories = nutrients.calories + dish.calories;
            nutrients.carbohydrates = nutrients.carbohydrates + dish.calories;
            nutrients.protein = nutrients.protein + dish.protein;
            nutrients.fat = nutrients.fat + dish.fat;
        });
    }

    // Передаємо сформований об'єкт на Frontend.
    // Якщо якісь дані не були внесені - на Frontend передаємо '0' (початкове значення)
    return nutrients;
}

module.exports = { nutrientsByFoodType };
