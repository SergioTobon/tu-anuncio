const urlBase = 'http://localhost:3000/api/anuncio';

async function getAnunciosPorNegocio(idNegocio) {
    const url = `${urlBase}/${idNegocio}`; // Construimos la URL con el idNegocio

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener los anuncios');
        }

        // Procesamos la respuesta como JSON
        const anuncios = await response.json();
        console.log(anuncios);
        
        return anuncios; // Devolvemos los datos obtenidos
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Error al obtener los anuncios' };
    }
}
