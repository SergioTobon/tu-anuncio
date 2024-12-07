const url5 = 'http://localhost:3000/api/negocio';

// Obtener el ID del usuario desde localStorage
function getUsuarioId() {
    return localStorage.getItem('usuario'); // Obtenemos el ID del usuario desde localStorage
}

async function getNegocios(idUsuario) {
    const url = `${url5}/${idUsuario}`; 

    try {
        const response = await fetch(url); // Realizamos una solicitud GET para obtener los negocios
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json(); // Procesamos la respuesta a JSON
        return data; // Devolvemos la respuesta del servidor
    } catch (error) {
        console.error('Error:', error);
        return []; // Devolvemos un arreglo vacío si ocurre un error
    }
}
