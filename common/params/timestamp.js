module.exports = function timestamp() {
    const startTs = Date.now() - (Math.floor(Math.random() * 200 + 1000));
    const now = Date.now();

    return {
        hal: startTs / 2,
        delt: now - startTs,
        ssts: now - startTs,
        startTs,
        startDate: new Date(startTs).toString()
    };
};