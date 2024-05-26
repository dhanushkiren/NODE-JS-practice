import express from "express";
import helmet from "helmet";
import mainRoutes from "./main.routes.js";
import userRoutes from "./user.routes.js";
import rateLimit from "express-rate-limit";
import compression from "compression";

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).

});

app.use(compression())
app.use(limiter)
app.use(express.json());
app.use(helmet());
app.use("/v1", mainRoutes);
app.use("/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});
