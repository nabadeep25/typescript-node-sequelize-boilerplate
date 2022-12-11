import { get } from "lodash";
import { Response, NextFunction } from "express";
import { customRequest } from "../types/customDefinition";

const isAdmin = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = get(req, "user");

    if (user.role !== 1) {
      return res
        .status(403)
        .json({ error: true, errorMsg: "Access not granted" });
    }
    return next();

    return next();
  } catch (err) {
    let msg = "Internal Server Error";
    if (err instanceof Error) {
      msg = err.message;
    } else if (err) {
      msg = err;
    }
    return res.status(400).json({ errorMsg: msg, error: true });
  }
};
export default isAdmin;
