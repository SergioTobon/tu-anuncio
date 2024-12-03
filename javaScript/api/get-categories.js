const url = 'http://localhost:3000/api/categorias';

async function getCategories() {
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
        return { success: false, message: 'categorias no encontradas' }; // En caso de error
    }
}

async function getNombreCategoria(nombre) {
    // Convertimos los datos a JSON
    const opciones = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify(nombre) // Convertimos el objeto a un string JSON
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
        return { success: false, message: 'nombre de categorias no encontrado' }; // En caso de error
    }
}

