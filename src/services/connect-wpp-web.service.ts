import { wppInstance } from "../config/wpp-instance";
import qrCode from "qrcode-terminal";

export class ConnectWppService {
  execute() {
    wppInstance.on("qr", (qr) => {
      qrCode.generate(qr, { small: true }, function (qrcode) {
        console.log(qrcode);
      });
    });

    wppInstance.on("ready", () => {
      console.log("Conectado com o WPP Localmente com sucesso!");
    });
  }
}
