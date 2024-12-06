const url5 = 'http://localhost:3000/api/negocio';

async function getNegocios(idUsuario) {
    const url = `${url5}/${idUsuario}`; 

    // Convertimos los datos a JSON
    const opciones = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify() // Convertimos el objeto a un string JSON
    };


    // Hacemos la solicitud POST con fetch
    try {
        const response = await fetch(url, opciones); // Esperamos la respuesta del fetch
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json(); // Procesamos la respuesta a JSON
        return data; // Devolvemos la respuesta del servidor
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Negocios no encontrados' }; // En caso de error
    }
}


