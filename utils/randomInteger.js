function randomInteger(min, max) {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

module.exports = { randomInteger };
