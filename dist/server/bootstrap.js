"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
require("express-async-errors");
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("../middlewares/errorHandler");
const connect_wpp_web_service_1 = require("../services/connect-wpp-web.service");
const autoResponse_1 = require("../useCases/auto-response/autoResponse");
const router_1 = require("./router");
(0, dotenv_1.config)();
class Bootstrap {
    app;
    port;
    instanceWpp;
    autoResponse;
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.instanceWpp = new connect_wpp_web_service_1.ConnectWppService();
        this.autoResponse = new autoResponse_1.AutoResponse();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        this.app.use(router_1.routes);
        this.app.use(errorHandler_1.errorHandler);
    }
    handle() {
        this.instanceWpp.execute();
        this.autoResponse.execute();
        this.app.listen(this.port, () => console.log(`Servidor rodando localmente em: http://localhost:${this.port}`));
    }
}
exports.Bootstrap = Bootstrap;
