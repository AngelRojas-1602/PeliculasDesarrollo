const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 3000;
const mongoUrl = 'mongodb+srv://angel_2:<yzmGA77aO41T5lI0>@cluster0.byae0rp.mongodb.net/'; // URL de conexión a tu base de datos MongoDB

app.use(express.json());

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MongoDB');

  const db = client.db('nombre_de_tu_base_de_datos'); // Reemplaza 'nombre_de_tu_base_de_datos' con el nombre de tu base de datos

  app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;

    // Realiza la consulta en la base de datos para verificar el correo y la contraseña
    db.collection('usuarios').findOne({ correo, contraseña }, (err, result) => {
      if (err) throw err;

      if (result) {
        // Usuario autenticado
        res.json({ mensaje: 'Inicio de sesión exitoso' });
      } else {
        // Usuario no autenticado
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


