"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTextMessageService = void 0;
const wpp_instance_1 = require("../../config/wpp-instance");
class SendTextMessageService {
    wpp;
    constructor() {
        this.wpp = wpp_instance_1.wppInstance;
    }
    execute = async ({ phone, message }) => {
        const phoneId = await this.wpp.getNumberId(phone);
        if (!phoneId) {
            throw new Error("Numero fornecido não é valido!");
        }
        const res = await this.wpp.sendMessage(phoneId._serialized, message);
        return res;
    };
}
exports.SendTextMessageService = SendTextMessageService;
