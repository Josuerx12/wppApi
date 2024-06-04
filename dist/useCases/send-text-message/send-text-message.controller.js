"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTextMessageController = void 0;
class SendTextMessageController {
    serviceWpp;
    constructor(serviceWpp) {
        this.serviceWpp = serviceWpp;
    }
    handle = async (req, res) => {
        const payload = await this.serviceWpp.execute(req.body);
        return res.send({ payload });
    };
}
exports.SendTextMessageController = SendTextMessageController;
