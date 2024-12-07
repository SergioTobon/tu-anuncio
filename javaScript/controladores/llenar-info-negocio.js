// Función para llenar los datos del negocio en la página
async function llenarDatosNegocio() {
    const negocioId = getNegocioIdFromUrl(); // Obtiene el ID del negocio de la URL
    if (!negocioId) {
        return;
    }

    const negocio = await getNegocioPorId(negocioId); // Obtiene los datos del negocio
    if (!negocio) {
        alert('No se pudo obtener la información del negocio');
        return;
    }

    if(negocio.urlImagenes != null){
        mostrarImagen(negocio.urlImagenes);
    }else{
        ocultarImagen();
    }

    document.querySelector('.name-company').textContent = negocio.nombre || 'Sin nombre';
    document.querySelector('.data-company').innerHTML = `
        <p class="p-negocio"><strong>Ubicación:</strong> ${negocio.ubicacion || 'Sin ubicación'}</p>
        <p class="p-negocio"><strong>Teléfono:</strong> ${negocio.contacto || 'Sin teléfono'}</p>
        <p class="p-negocio"><strong>Categoría:</strong> ${negocio.nombreCategoria || 'Sin categoría'}</p>
        <p class="p-negocio"><strong>Descripción:</strong> ${negocio.descripcion || 'Sin descripción'}</p>
    `;

    console.log(negocio);
    
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', llenarDatosNegocio);