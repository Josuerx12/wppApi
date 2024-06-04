import { Client } from "whatsapp-web.js";
import { wppInstance } from "../../config/wpp-instance";
import { SendTextMessageDTO } from "./send-text-message.dto";

export class SendTextMessageService {
  wpp: Client;

  constructor() {
    this.wpp = wppInstance;
  }

  execute = async ({ phone, message }: SendTextMessageDTO) => {
    const phoneId = await this.wpp.getNumberId(phone);

    if (!phoneId) {
      throw new Error("Numero fornecido não é valido!");
    }

    const res = await this.wpp.sendMessage(phoneId._serialized, message);
    return res;
  };
}
