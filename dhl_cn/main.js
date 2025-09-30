const CookieManager = require('./common/cookieManager');
const home = require("./requests/01-home");
const gen_sensor_data = require("./params/main");
const post = require("./requests/02-post");
const final = require("./requests/03-final");

async function main() {
    // 创建共享的cookie管理器
    const cookieManager = new CookieManager();
    const id = "1232343";

    try {
        // 第一步：访问首页，cookies会自动保存到管理器
        console.log("Step 1: Accessing home page...");
        let { exec_js_url } = await home(id, cookieManager);
        console.log("Cookies after home:", cookieManager.cookies);

        // 第二步：获取JS代码
        console.log("Step 2: Fetching JS code...");
        const res = await fetch(exec_js_url);
        const exec_js_code = await res.text();

        // 第三步：生成sensor数据并发送POST请求
        console.log("Step 3: Sending sensor data...");
        const bm_sz = cookieManager.getCookie('bm_sz');
        const sensor_data = gen_sensor_data(bm_sz, exec_js_code, id);

        let postResult = await post(exec_js_url, sensor_data, cookieManager);
        console.log("Cookies after post:", cookieManager.cookies);
        console.log("Post response:", postResult.response);

        // 第四步：获取最终结果
        console.log("Step 4: Getting final result...");
        const finalResponse = await final(cookieManager, id);
        console.log("Final response:", finalResponse);

    } catch (error) {
        console.error("Main process error:", error);
    }
}

main().catch(console.error);