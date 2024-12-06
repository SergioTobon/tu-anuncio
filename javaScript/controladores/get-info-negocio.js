const url5 = 'http://localhost:3000/api/negocio';
async function getNegocioPorId(negocioId) {
    const url = `${url5}/${negocioId}`;  // URL completa con el id del negocio

    const opciones = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(url, opciones);
        if (!response.ok) {
            throw new Error('Error al obtener el negocio');
        }
        const negocio = await response.json(); // Procesamos la respuesta como JSON
        
        // Aquí imprimimos el objeto 'negocio' para verificar la estructura
        console.log(negocio);  // Esto te ayudará a ver qué datos devuelve la API
        
        return negocio;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}