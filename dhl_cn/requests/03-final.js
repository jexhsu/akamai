async function final(cookieManager, id) {
    const url = `https://www.dhl.com/utapi?trackingNumber=${id}&language=zh&requesterCountryCode=CN&source=tt`;

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Google Chrome\";v=\"140\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": cookieManager.getCookieString(),
            "Referer": `https://www.dhl.com/cn-zh/home/tracking.html?submit=1&tracking-id=${id}`
        }
    });

    cookieManager.parseSetCookie(res.headers);
    return await res.json();
}

module.exports = final;