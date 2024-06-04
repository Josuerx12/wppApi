"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("./server/bootstrap");
const app = new bootstrap_1.Bootstrap();
app.handle();
