function calculateBMR(user) {
    const { gender, age, height, weight, activity, goal } = user;
    let calories = 0; // калорії
    let protein = 0; // білки
    let fat = 0; // жири
    let carbohydrates = 0; // вуглеводи

    if (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female') {
        const setError = new Error('Gender is undefined');
        setError.code = 400;
        throw setError;
    }

    if (gender.toLowerCase() === 'male') {
        calories = Math.round((88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity);
    } else {
        calories = Math.round((447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity);
    }

    switch (goal.toLowerCase()) {
        case 'lose fat':
            protein = parseFloat(((calories * 0.3) / 4.1).toFixed(2));
            fat = parseFloat(((calories * 0.25) / 9.3).toFixed(2));
            carbohydrates = parseFloat(((calories * (1 - 0.3 - 0.25)) / 4.1).toFixed(2));
            break;

        case 'gain muscle':
            protein = parseFloat(((calories * 0.35) / 4.1).toFixed(2));
            fat = parseFloat(((calories * 0.25) / 9.3).toFixed(2));
            carbohydrates = parseFloat(((calories * (1 - 0.35 - 0.25)) / 4.1).toFixed(2));
            break;

        default:
            protein = parseFloat(((calories * 0.25) / 4.1).toFixed(2));
            fat = parseFloat(((calories * 0.3) / 9.3).toFixed(2));
            carbohydrates = parseFloat(((calories * (1 - 0.25 - 0.3)) / 4.1).toFixed(2));
            break;
    }

    const BMR = {
        calories,
        protein,
        fat,
        carbohydrates,
    };

    return BMR;
}

module.exports = { calculateBMR };
