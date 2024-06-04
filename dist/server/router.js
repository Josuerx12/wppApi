"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const wppRoutes_1 = require("./routes/wppRoutes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/wpp", wppRoutes_1.wppRouter);
