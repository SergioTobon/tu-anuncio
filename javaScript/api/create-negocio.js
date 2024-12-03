const url2 = 'http://localhost:3000/api/negocio/create-negocio';

async function createNegocio(negocio) {
    // Convertimos los datos a JSON
    const opciones = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify(negocio) // Convertimos el objeto a un string JSON
    };

    // Hacemos la solicitud POST con fetch
    try {
        const response = await fetch(url2, opciones); // Esperamos la respuesta del fetch
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
