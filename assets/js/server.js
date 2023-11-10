const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const app = express();
const PORT = 8000;

// Conéctate a MongoDB usando la variable de entorno MONGODB_URI
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is Conected')

});

// Definir el modelo de película
const Peliculas = mongoose.model('Pelicula', {
  titulo: String,
  anio: Number,
  descripcion: String,
  genero: String,
  calificacion: Number,
  numeroResena: Number
});

// Ruta para obtener todas las películas
app.get('/peliculas', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

// Obtiene la calificación de la película (por ejemplo, un valor entre 1 y 5)
const calificacion = pelicula.calificacion;

// Selecciona el contenedor de estrellas
const starContainer = document.getElementById('star-rating');

// Itera a través de las estrellas y establece el color según la calificación
for (let i = 1; i <= 5; i++) {
    const starElement = document.getElementById(`star${i}`);

    // Si la calificación es mayor o igual a la posición actual de la estrella, establece el color a amarillo (activo)
    if (calificacion >= i) {
        starElement.classList.add('text-warning');
    } else {
        starElement.classList.remove('text-warning');
    }
}

// Obtén el número de reseñas (esto podría provenir de una API, base de datos, etc.)
var numeroResenas = obtenerNumeroDeResenas(); // Esta función debería obtener el número de reseñas de alguna fuente de datos

// Actualiza el contenido del elemento con el ID 'numero-resenas' con el número de reseñas
document.getElementById("numero-resenas").textContent = numeroResenas;

// Archivo custom.js
let contadorPeliculasFavoritas = 0;

document.querySelector('.fa-heart').addEventListener('click', function() {
    contadorPeliculasFavoritas++;
    document.querySelector('.badge').textContent = contadorPeliculasFavoritas;
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('/peliculas')
     .then(response => response.json())
     .then(peliculas => {
        // Obtener el contenedor de películas por su ID
        const contenedorPeliculas = document.getElementById('contenedor-peliculas');

        // Iterar a través de las películas y mostrarlas en tu plantilla
        peliculas.forEach(pelicula => {
           const peliculaHTML = `
           <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                  <div class="card rounded-0">
                  <img class="card-img rounded-0 img-fluid" src="assets/img">
                  <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul class="list-unstyled">
                          <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                          <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                      </ul>
                  </div>
                  </div>
                  <div class="card-body">
                  <a href="shop-single.html" class="h3 text-decoration-none">${pelicula.titulo}</a>
                  <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>${pelicula.anio}</li>
                      <li class="pt-2">
                          <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                          <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                          <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                          <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                          <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                      </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1" id="star-rating">
                      <li><a class="text-warning fa fa-star" href="#" id="star1"></a></li>
                      <li><a class="text-warning fa fa-star" href="#" id="star2"></a></li>
                      <li><a class="text-warning fa fa-star" href="#" id="star3"></a></li>
                      <li><a class="text-warning fa fa-star" href="#" id="star4"></a></li>
                      <li><a class="text-warning fa fa-star" href="#" id="star5"></a></li>                           
                  </ul>
                  <p class="text-center mb-0">${pelicula.genero}</p>
                  </div>
              </div>
          </div>
           `;

           // Agregar la película al contenedor de películas
           contenedorPeliculas.innerHTML += peliculaHTML;
        });
     })
     .catch(error => {
        console.error(error);
     });
});

  