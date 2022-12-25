import { ControllerFunction } from "customDefinition";
import { NextFunction, Request, Response } from "express";

export function handleError(fn: ControllerFunction) {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
}
