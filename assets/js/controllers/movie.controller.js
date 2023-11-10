import Movie from "../models/Movie.js";

export const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const { Nombre, Año, Genero, Descripcion } = req.body;
    const newMovie = new Movie({
      Nombre,
      Año,
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
    const { Nombre, Año, Genero, Descripcion } = req.body;
    const movieUpdated = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          Nombre,
          Año,
          Genero,
          Descripcion,
        },
      },
      {
        new: true,
      }
    );

    return res.json(movieUpdated);
  } catch (error) {
    next(error);
  }
};
