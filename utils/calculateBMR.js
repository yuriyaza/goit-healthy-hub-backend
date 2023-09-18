function calculateBMR(user) {
    const { gender, age, height, weight, activity } = user;
    let BMR = 0;

    if (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female') {
        const setError = new Error('Gender is undefined');
        setError.code = 400;
        throw setError;
    }

    if (gender.toLowerCase() === 'male') {
        BMR = Math.round((88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity);
    }

    if (gender.toLowerCase() === 'female') {
        BMR = Math.round((447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity);
    }

    return BMR;
}

module.exports = { calculateBMR };
