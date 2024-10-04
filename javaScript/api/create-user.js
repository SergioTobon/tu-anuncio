const url = 'http://localhost:3000/api/usuarios/create-user';

function createUser(user) {
    // Convertimos los datos a JSON
    const opciones = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify(user) // Convertimos el objeto a un string JSON
    };

    // Hacemos la solicitud POST con fetch
    fetch(url, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            console.log('Respuesta de la API:', data); // Procesamos la respuesta
        })
        .catch(error => {
            console.error('Error:', error); // Manejamos errores
        });
}