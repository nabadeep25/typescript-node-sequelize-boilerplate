import { Router } from "express";
import { requireUser, validateRequest } from "../middleware";
import { getUserData, updateUser } from "../controllers/user";
import { updateSchema } from "../validation/user";

const userRouter = Router();

userRouter.patch(
  "/:userId",
  requireUser,
  validateRequest(updateSchema),
  updateUser
);
userRouter.get("/", requireUser, getUserData);

export default userRouter;
