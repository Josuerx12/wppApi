import { Request, Response } from "express";
import { SendTextMessageService } from "./send-text-message.service";

export class SendTextMessageController {
  constructor(private serviceWpp: SendTextMessageService) {}

  handle = async (req: Request, res: Response) => {
    const payload = await this.serviceWpp.execute(req.body);
    return res.send({ payload });
  };
}
