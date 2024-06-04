"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectWppService = void 0;
const wpp_instance_1 = require("../config/wpp-instance");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
class ConnectWppService {
    execute() {
        wpp_instance_1.wppInstance.on("qr", (qr) => {
            qrcode_terminal_1.default.generate(qr, { small: true }, function (qrcode) {
                console.log(qrcode);
            });
        });
        wpp_instance_1.wppInstance.on("ready", () => {
            console.log("Conectado com o WPP Localmente com sucesso!");
        });
    }
}
exports.ConnectWppService = ConnectWppService;
