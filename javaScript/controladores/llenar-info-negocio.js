// Función para llenar los datos del negocio en la página
async function llenarDatosNegocio() {
    const negocioId = getNegocioIdFromUrl(); // Obtiene el ID del negocio de la URL
    if (!negocioId) {
        alert('No se proporcionó un ID de negocio válido');
        return;
    }

    const negocio = await getNegocioPorId(negocioId); // Obtiene los datos del negocio
    if (!negocio) {
        alert('No se pudo obtener la información del negocio');
        return;
    }

    // Actualiza los elementos del DOM con los datos del negocio
    document.querySelector('.name-company').textContent = negocio.nombre || 'Sin nombre';
    document.querySelector('.data-company').innerHTML = `
        <p><strong>Ubicación:</strong> ${negocio.ubicacion || 'Sin ubicación'}</p>
        <p><strong>Teléfono:</strong> ${negocio.telefono || 'Sin teléfono'}</p>
        <p><strong>Email:</strong> ${negocio.email || 'Sin email'}</p>
        <p><strong>Categoría:</strong> ${negocio.categoria || 'Sin categoría'}</p>
        <p><strong>Descripción:</strong> ${negocio.descripcion || 'Sin descripción'}</p>
    `;
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', llenarDatosNegocio);