import { Router } from "express";

const router = Router();

import {
  getMovies,
  createMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

router.get("/", getMovies);

router.post("/", createMovie);

router.delete("/:id", deleteMovie);

export default router;
