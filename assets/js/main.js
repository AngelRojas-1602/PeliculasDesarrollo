document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Realizar la solicitud de inicio de sesión al backend
        fetch('http://tu-backend/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta del backend
            if (data.success) {
                // Inicio de sesión exitoso, redireccionar o realizar acciones adicionales
                alert('Inicio de sesión exitoso');
                // Puedes redireccionar a otra página aquí si es necesario
            } else {
                // Inicio de sesión fallido, mostrar un mensaje de error
                alert('Inicio de sesión fallido');
            }
        })
        .catch(error => {
            // Manejar errores de la solicitud
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        });
    });
});