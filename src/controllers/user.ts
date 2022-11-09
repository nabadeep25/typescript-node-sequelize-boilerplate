import { findOneUser, updateUserById } from "../services/userService";
import { Request, Response } from "express";
import { omit } from "lodash";
import { customRequest } from "../middleware/requiresUser";

const omitData = ["password"];
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    let body = req.body;
    body = omit(body, omitData);

    const user = await findOneUser({ id: userId });

    if (!user) {
      throw new Error("User not found");
    }

    const updated = await updateUserById(body, parseInt(userId, 10));

    return res.status(200).json({
      updated: updated[0],
      msg: updated[0] ? "Data updated successfully" : "failed to update",
      error: false,
    });
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

export const getUserData = async (req: customRequest, res: Response) => {
  try {
    return res.status(200).json({
      data: req.user,

      error: false,
    });
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
