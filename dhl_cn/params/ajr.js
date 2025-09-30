function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function processMouseData(mouseData) {
    let randomIndex = -1;
    let dataArray = [];
    if (mouseData && typeof mouseData === "string" && mouseData.length > 0) {
        let segments = mouseData.split(";");
        if (segments.length > 1 && segments[segments.length - 1] === "") {
            segments.pop();
        }
        randomIndex = Math.floor(Math.random() * segments.length);
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
    return arr.slice(2).concat(arr.slice(0, 2));
}

module.exports = function actionJourneyRecord(mouseData = "") {
    let [index, data] = processMouseData(mouseData);
    return [data, index, rotateLeft(data)].join("|");
}
