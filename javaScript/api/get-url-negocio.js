const url7 = 'http://localhost:3000/api/negocio';
// Función para obtener un negocio por su ID
async function getNegocioPorId(idNegocio) {
    const url = `${url7}/${idNegocio}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Error al obtener el negocio');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener el negocio:', error);
        return null;
    }
}



function getNegocioIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Retorna el valor del parámetro 'id'
}