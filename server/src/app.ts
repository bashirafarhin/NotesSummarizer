import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route";
import emailRoute from "./routes/email.route";
import { errorHandler } from "./middlewares/error.middleware";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/messages", messageRoute);
app.use("/api/emails", emailRoute);
app.use(errorHandler);

app.get("/", (_req, res) => {
  res.send("Server is running");
});

export default app;
