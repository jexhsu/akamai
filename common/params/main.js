const helper = require("akamai-v3-sensor-data-helper");
const fs = require("fs");
const path = require("path");

module.exports = function gen_sensor_data(__dirname, bm_sz, original_sensor_data) {
    const cookieHash = helper.extractCookieHash(bm_sz);

    const filePath = path.join(__dirname, "resource/param_encryptor.js");
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const result = helper.encrypt(original_sensor_data(), cookieHash, fileContent);

    return result.success === true ? result.data.sensor_data : result
}
