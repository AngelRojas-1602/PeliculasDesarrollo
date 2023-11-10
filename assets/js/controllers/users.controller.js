import User from "../models/User.js";

// users.controller.js
export const getUsers = async (req, res) => {
  try {
    // Lógica para obtener usuarios de la base de datos
    const users = await User.find();  // Suponiendo que estás utilizando Mongoose
    console.log("Usuarios recuperados:", users);
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { username } = req.body;

    // Find an existing user
    const userFound = await User.findOne({ username });
    console.log(userFound);

    // if user exists return a 409 http status code
    if (userFound) {
      const error = new Error("The user already exists");
      error.status = 409;
      throw error;
    }

    // Create a new User
    const newUser = new User({ username });
    const userSaved = await newUser.save();
    return res.json(userSaved);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);

    if (!userDeleted) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};