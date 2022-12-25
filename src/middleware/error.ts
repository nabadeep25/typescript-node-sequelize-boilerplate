import { customError } from "customDefinition";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../util/ApiError";

/**
 * Error Handler Middleware
 * @param error
 * @param req
 * @param res
 * @param next
 */
export const errorHandler = (
  error: customError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  let err = error;

  if (!(error instanceof ApiError)) {
    const statusCode = 500;
    const message = error.message || "Internal server error";
    err = new ApiError(statusCode, message);
  }

  const { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
  };

  res.status(statusCode).send(response);
};
