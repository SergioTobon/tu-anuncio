function guardarImagenNegocio() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0]; // Obtiene el primer archivo seleccionado

    if (!file) {
        alert('Por favor, selecciona una imagen.');
        return;
    }

    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido.');
        return;
    }

    const reader = new FileReader();

    const imagenNegocio ={
        imagen: file,
        tipoImagen : 'negocio',
        idNegocio
    }
}