async function home(id, cookieManager) {
    const url = `https://www.dhl.com/cn-zh/home/tracking.html?submit=1&tracking-id=${id}`;

    try {
        const res = await fetch(url, {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8",
                "cookie": cookieManager.getCookieString() // 使用共享cookies
            },
            method: "GET"
        });

        // 保存新的cookies到管理器
        cookieManager.parseSetCookie(res.headers);

        const text = await res.text();
        const jsUrls = [...text.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
        const exec_js_url = jsUrls.length >= 2 ? "https://www.dhl.com" + jsUrls[jsUrls.length - 2] : null;

        return { exec_js_url };

    } catch (err) {
        console.error("💥 Error:", err.message);
        return null;
    }
}

module.exports = home;