const startTs = Date.now() - (Math.floor(Math.random() * 200 + 1000));

module.exports = function timestamp() {
    const now = Date.now();
    return {
        hal: startTs / 2,
        delt: now - startTs,
        ssts: now - startTs,
        startTs
    }
}