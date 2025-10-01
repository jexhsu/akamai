let RANDOM_SEED = null;

function getRandomInt(min, max) {
    const randomValue = RANDOM_SEED !== null ? RANDOM_SEED : Math.random();
    return Math.round(randomValue * (max - min) + min);
}

function processMouseData(mouseData) {
    let randomIndex = -1;
    let dataArray = [];
    if (mouseData && typeof mouseData === "string" && mouseData.length > 0) {
        let segments = mouseData.split(";");
        if (segments.length > 1 && segments[segments.length - 1] === "") {
            segments.pop();
        }
        const randomValue = RANDOM_SEED !== null ? RANDOM_SEED : Math.random();
        randomIndex = Math.floor(randomValue * segments.length);
        let fields = segments[randomIndex].split(",");
        for (let f of fields) {
            if (!isNaN(f) && !isNaN(parseInt(f, 10))) {
                dataArray.push(f);
            }
        }
    } else {
        let id = String(getRandomInt(1, 5));
        let type = "1";
        let x = String(getRandomInt(20, 70));
        let y = String(getRandomInt(100, 300));
        let t = String(getRandomInt(100, 300));
        dataArray = [id, type, x, y, t];
    }
    return [randomIndex, dataArray];
}

function rotateLeft(arr) {
    return arr.slice(3).concat(arr.slice(0, 3));
}

module.exports = function generateAJR(mev = "") {
    let [index, data] = processMouseData(mev);
    return [rotateLeft(data), index, data].join("|");
}

module.exports.setSeed = function (seed) {
    RANDOM_SEED = seed;
}
