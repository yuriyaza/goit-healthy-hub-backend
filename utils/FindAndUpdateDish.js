function FindAndUpdateDish(foodData, dishPerDay, newDish) {
    if (foodData[dishPerDay]) {
        foodData[dishPerDay] = foodData[dishPerDay].map(dish => {
            if (dish._id.toString() === newDish.id) {
                dish.name = newDish.name;
                dish.calories = newDish.calories;
                dish.carbohydrates = newDish.carbohydrates;
                dish.protein = newDish.protein;
                dish.fat = newDish.fat;
            }
            return dish;
        });
    }

    return foodData;
}

module.exports = { FindAndUpdateDish };
