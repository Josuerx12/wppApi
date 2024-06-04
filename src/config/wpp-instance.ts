import { Client, LocalAuth } from "whatsapp-web.js";

const wppInstance = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
  webVersionCache: {
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2411.2.html",
    type: "remote",
  },
});

wppInstance.initialize();

export { wppInstance };
