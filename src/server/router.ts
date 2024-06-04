import { Router } from "express";
import { wppRouter } from "./routes/wppRoutes";

const routes = Router();

routes.use("/wpp", wppRouter);

export { routes };
