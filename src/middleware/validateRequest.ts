import Joi, { Schema } from "joi";

import { Request, Response, NextFunction } from "express";
const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details, message } = error;
      const messages = details.map(i => i.message).join(",");

      console.log("error", messages);
      res.status(400).json({ error: messages, msg: message });
    }
  };
};
export default validateRequest;
