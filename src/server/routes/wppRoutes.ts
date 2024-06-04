import { Router } from "express";
import { SendTextMessageController } from "../../useCases/send-text-message/send-text-message.controller";
import { SendTextMessageService } from "../../useCases/send-text-message/send-text-message.service";

const wppRouter = Router();

const sendTextMessageService = new SendTextMessageService();
const sendTextController = new SendTextMessageController(
  sendTextMessageService
);

wppRouter.post("/send-text", sendTextController.handle);

export { wppRouter };
