import { Client, LocalAuth } from "whatsapp-web.js";

const wppInstance = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    //  executablePath: "/usr/bin/chromium-browser",
  },
  webVersionCache: {
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2411.2.html",
    type: "remote",
  },
});

wppInstance.initialize();

export { wppInstance };
