import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

import moviesRoutes from "./routes/movie.routes.js"
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", moviesRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  });

export default app;

