const url22 = 'http://localhost:3000/api/anuncio/create-anuncio';

async function createAnuncio(anuncio) {
    // Convertimos los datos a JSON
    const opciones = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify(anuncio) // Convertimos el objeto a un string JSON
    };

    // Hacemos la solicitud POST con fetch
    try {
        const response = await fetch(url22, opciones); // Esperamos la respuesta del fetch
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json(); // Procesamos la respuesta a JSON
        return data; // Devolvemos la respuesta del servidor
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al crear el negocio' }; // En caso de error
    }
}
