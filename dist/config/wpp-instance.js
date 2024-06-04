"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wppInstance = void 0;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const wppInstance = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth(),
    puppeteer: { headless: true },
    webVersionCache: {
        remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2411.2.html",
        type: "remote",
    },
});
exports.wppInstance = wppInstance;
wppInstance.initialize();
