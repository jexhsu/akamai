function calculateDistance(values) {
    const dx = values[0] - values[1];
    const dy = values[2] - values[3];
    const dz = values[4] - values[5];
    return Math.floor(Math.sqrt(dx * dx + dy * dy + dz * dz));
}

function generateJsrf(ts) {
    const randomFactor = Math.floor(Math.random() * 100000 + 10000);
    const multiplied = String(ts * randomFactor);
    let index = 0;
    const numbers = [];
    const longEnough = multiplied.length >= 18;

    while (numbers.length < 6) {
        numbers.push(parseInt(multiplied.slice(index, index + 2), 10));
        index = longEnough ? index + 3 : index + 2;
    }

    const distance = calculateDistance(numbers);
    return [randomFactor, distance];
}

function jsrf1(ts) {
    return generateJsrf(ts)[0];
}

function jsrf2(ts) {
    return generateJsrf(ts)[1];
}

module.exports = { jsrf1, jsrf2 };
