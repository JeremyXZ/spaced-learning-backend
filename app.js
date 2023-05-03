import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";
const app = express();
// const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/tasks", tasksRouter);

export default app;
