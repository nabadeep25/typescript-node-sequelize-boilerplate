import express from "express";
import logger from "morgan";
import dbInit from "./model/init";
import cors from "cors";
import { customRequest } from "./middleware/requiresUser";
import { deserializeUser } from "./middleware";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoute";

// Create Express server
const app = express();

app.use(logger("dev"));
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(deserializeUser);

/**
 * Primary app routes.
 */

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

/**
 * route to test server
 */

app.get("/api/", (req: customRequest, res) => {
  res.status(200).json({ msg: "server is up..", user: req.user });
});

/**
 * route to sync db
 */
app.patch("/api/sync", async (req, res) => {
  try {
    const sync = await dbInit(req.body?.alter);
    res.status(200).json({ ...sync, error: false });
  } catch (err) {
    console.log("ERR", err);
    let msg = "Internal Server Error";
    if (err instanceof Error) {
      msg = err.message;
    } else if (err) {
      msg = err;
    }
    return res.status(400).json({ errorMsg: msg, error: true });
  }
});

export default app;
