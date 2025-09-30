class CookieManager {
    constructor() {
        this.cookies = {};
    }

    // 从响应头中提取并保存cookies
    parseSetCookie(headers) {
        const setCookieHeader = headers.get('set-cookie');
        if (!setCookieHeader) return;

        const cookiePairs = setCookieHeader.split(',');
        cookiePairs.forEach(cookieStr => {
            const cookie = cookieStr.split(';')[0].trim();
            const [name, value] = cookie.split('=');
            if (name && value) {
                this.cookies[name] = value;
            }
        });
    }

    // 获取当前cookie字符串
    getCookieString() {
        return Object.entries(this.cookies)
            .map(([name, value]) => `${name}=${value}`)
            .join('; ');
    }

    // 获取特定cookie值
    getCookie(name) {
        return this.cookies[name];
    }

    // 设置cookie
    setCookie(name, value) {
        this.cookies[name] = value;
    }

    // 清空cookies
    clear() {
        this.cookies = {};
    }
}

module.exports = CookieManager;