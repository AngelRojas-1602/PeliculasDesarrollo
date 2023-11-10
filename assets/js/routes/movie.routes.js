import { Router } from "express";
import {
  getMovies,
  createMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";

const router = Router();

router.get("/movies", getMovies);

router.post("/movies", createMovie);

router.delete("/movies/:id", deleteMovie);

export default router;
