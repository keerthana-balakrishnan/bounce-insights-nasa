import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorHandling } from "../src/middleware/errorHandling.middleware.js";
import { router } from "../src/routes/nasa.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.ALLOW_ORIGIN,
};

app.use(cors(corsOptions));

app.get("/", (_, res) => {
  res.send({ message: "Service is running. use /api/{corresponding_endpoint}" });
});

app.use("/api", router);

app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
