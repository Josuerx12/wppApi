"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(404).json({
            error: err.message,
        });
    }
    next(err);
}
exports.errorHandler = errorHandler;
