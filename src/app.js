import express from "express";
import "dotenv/config";
import { practiceRouter } from "./routes/practice.routes.js";

const app = express();

const PORT = process.env.PORT || 4001;

app.use("/api/v1", practiceRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});