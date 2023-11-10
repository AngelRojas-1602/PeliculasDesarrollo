import express from "express";
import cors from "cors";
import morgan from "morgan";
import moviesRoutes from "./routes/movie.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// settings
app.set("port", process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/movies", moviesRoutes);

console.log(usersRoutes);
console.log(authRoutes);
console.log(moviesRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      error: {
          status: err.status,
          message: err.message,
          stack: err.stack,  // Agrega el stack trace del error
      },
  });
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


export default app;