import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Anio: {
      type: Number,
      required: true,
    },
    Genero: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Calificacion: {
      type: Number,
      default: 0,
    },
    NumResenas: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
