async function post(url, sensor_data, cookieManager) {
    const payload = typeof sensor_data === "string" ? sensor_data : JSON.stringify(sensor_data);

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "content-type": "text/plain;charset=UTF-8",
            "cookie": cookieManager.getCookieString() // 使用共享cookies
        },
        body: payload
    });

    console.log("payload is: ", payload)

    // 保存新的cookies到管理器
    cookieManager.parseSetCookie(res.headers);
    const response = await res.json();

    return { response };
}

module.exports = post;