<?php
$peliculas = [
    [
        "Nombre" => "Dune",
        "Anio" => 2021,
        "Genero" => "Ciencia Ficcion",
        "Descripcion" => "Dune es una película épica de ciencia ficción dirigida por Denis Villeneuve y escrita por Eric Roth, Jon Spaihts y el propio director. Es una coproducción internacional de Estados Unidos, Reino Unido, Canadá y Hungría y constituye la primera entrega de dos películas basada en una nueva versión revisada fiel a la novela homónima de 1965 de Frank Herbert.",
        "Calificacion" => 3.5,
        "NumResenas" => 423,
        "img" => ""
    ],
    [
        "Nombre" => "Joker",
        "Anio" => 2019,
        "Genero" => "Joker es una película de suspenso psicológico estadounidense de 2019 dirigida por Todd Phillips, quien coescribió el guion con Scott Silver. Basada en personajes de DC Comics, la película está protagonizada por Joaquin Phoenix como el Joker.",
        "Descripcion" => "Drama",
        "Calificacion" => 5,
        "NumResenas" => 653,
        "img" => ""
    ],
    [
        "Nombre" => "Tenet",
        "Anio" => 2020,
        "Genero" => "Ciencia Ficcion",
        "Descripcion" => "Tenet es una película de espionaje y ciencia ficción de 2020 escrita y dirigida por Christopher Nolan, quien también produjo la película con Emma Thomas. La película está protagonizada por John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine y Kenneth Branagh",
        "Calificacion" => 5,
        "NumResenas" => 3569,
        "img" => ""
    ]
];

  
  

  foreach ($peliculas as $pelicula) {
    echo '<div class="col-md-4">
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="' . $pelicula['img'] . '" alt="' . $pelicula['Nombre'] . '">
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <a href="shop-single.html" class="h3 text-decoration-none">' . $pelicula['Nombre'] . '</a>
                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>' . $pelicula['Anio'] . '</li>
                        <li class="pt-2">
                            <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul class="list-unstyled d-flex justify-content-center mb-1" id="star-rating">';

    $rating = $pelicula['Calificacion'];
    $stars = floor($rating);
    $half_star = $rating - $stars > 0 ? true : false;

    for ($i = 1; $i <= 5; $i++) {
        if ($i <= $stars) {
            echo '<li><a class="text-warning fa fa-star" href="#" id="star' . $i . '"></a></li>';
        } elseif ($half_star && $i == $stars + 1) {
            echo '<li><a class="text-warning fa fa-star-half-alt" href="#" id="star' . $i . '"></a></li>';
        } else {
            echo '<li><a class="text-warning fa fa-star-o" href="#" id="star' . $i . '"></a></li>';
        }
    }

    echo '</ul>
                    <p class="text-center mb-0">' . $pelicula['Genero'] . '</p>
                </div>
            </div>
        </div>';
}
?>
