import { NextFunction, Response, Request } from "express";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    console.log(err);
    res.status(404).json({
      error: err.message,
    });
  }
  next(err);
}
