import Movie from "../models/Movie.js";

export const getMovies = async (req, res, next) => {
  try {
    console.log("Attempting to fetch movies...");
    const movies = await Movie.find();
    console.log("Movies fetched successfully:", movies);
    if (!movies || movies.length === 0) {
      return res.status(404).json({ error: "No hay películas disponibles" });
    }
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    next(error);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const { Nombre, Anio, Genero, Descripcion } = req.body;
    if (!Nombre || !Anio || !Genero || !Descripcion) {
      const error = new Error("Todos los campos son obligatorios");
      error.status = 400;
      throw error;
    }
    const newMovie = new Movie({
      Nombre,
      Anio,
      Genero,
      Descripcion,
    });
    const savedMovie = await newMovie.save();
    return res.json(savedMovie);
  } catch (error) {
    next(error);
  }
};

export const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      const error = new Error("Movie does not exist");
      error.status = 404;
      throw error;
    }

    res.json(movie);
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
      const error = new Error("Movie does not exist");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const { Nombre, Anio, Genero, Descripcion } = req.body;
    if (!Nombre || !Anio || !Genero || !Descripcion) {
      const error = new Error("Todos los campos son obligatorios");
      error.status = 400;
      throw error;
    }
    const movieUpdated = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          Nombre,
          Anio,
          Genero,
          Descripcion,
        },
      },
      {
        new: true,
      }
    );
    if (!movieUpdated) {
      return res.status(404).json({ error: "La película no existe" });
    }
    return res.json(movieUpdated);
  } catch (error) {
    next(error);
  }
};
