import "express-async-errors";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { errorHandler } from "../middlewares/errorHandler";
import { ConnectWppService } from "../services/connect-wpp-web.service";
import { AutoResponse } from "../useCases/auto-response/autoResponse";
import { routes } from "./router";

config();

export class Bootstrap {
  private app: express.Express;
  private port: string | number;
  private instanceWpp: ConnectWppService;
  private autoResponse: AutoResponse;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.instanceWpp = new ConnectWppService();
    this.autoResponse = new AutoResponse();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(routes);
    this.app.use(errorHandler);
  }

  handle() {
    this.instanceWpp.execute();
    this.autoResponse.execute();
    this.app.listen(this.port, () =>
      console.log(
        `Servidor rodando localmente em: http://localhost:${this.port}`
      )
    );
  }
}
