async function uploadImage(formData) {
    const url = 'http://localhost:3000/api/imagenes/upload';
    // Convertimos los datos a JSON
    const opciones = {
        method: 'POST', 
        body:formData// Convertimos el objeto a un string JSON
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
        return { success: false, message: 'Erro al guardad la imagen' }; // En caso de error
    }
}
