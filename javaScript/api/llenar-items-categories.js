// Obtener el contenedor donde se agregarán los elementos
const gridContainer = document.querySelector('.grid-container');

// URL de la API
const url9 = 'http://localhost:3000/api/categorias';

async function getCategories() {
    // Opciones para la solicitud GET
    const opciones = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
        }
    };

    // Hacemos la solicitud GET con fetch
    try {
        const response = await fetch(url9, opciones); // Usamos la URL correcta
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json(); // Procesamos la respuesta a JSON
        return data; // Devolvemos la respuesta del servidor
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Categorías no encontradas' }; // En caso de error
    }
}
