document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("form-anuncio");
    const modal = document.getElementById("modal");
    const btnCrearAnuncio = document.getElementById("crear-anuncio"); // Asegúrate de que este botón existe en el HTML
    const closeModal = document.querySelector(".close");

    // Verificar que el formulario está disponible en el DOM
    if (!formulario) {
        console.error("Formulario no encontrado");
        return;
    }

    // Abre el modal cuando se haga clic en el botón "Crear Anuncio"
    if (btnCrearAnuncio) {
        btnCrearAnuncio.addEventListener('click', function() {
            modal.style.display = "block";
        });
    }

    // Cierra el modal cuando se hace clic en la "x"
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Cierra el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    formulario.addEventListener('submit', async function(event) {
        event.preventDefault();

        const urlParams = new URLSearchParams(window.location.search);
        const negocioId = urlParams.get('id'); // Obtiene el ID del negocio de la URL

        const registerName = document.getElementById("nombre-anuncio").value;
        const registerPrecio = document.getElementById("precio-anuncio").value;
        const fileInputAnuncio = document.getElementById('file-image-anuncio');
        const file = fileInputAnuncio.files[0]; // Obtiene el primer archivo seleccionado

        if (!file) {
            alert('Por favor, selecciona una imagen.');
            return;
        }

        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido.');
            return;
        }

        const anuncio = {
            idNegocio: negocioId,
            nombre: registerName,
            precio: registerPrecio,
        };

        console.log("Datos registrados: ", anuncio);
        const validacion = await createAnuncio(anuncio);

        if (validacion.success) {
            const formData = new FormData();
            formData.append('imagen', file); // Añade la imagen
            formData.append('tipoImagen', 'anuncio'); // Otro campo
            formData.append('idNegocio', anuncio.idNegocio); // Otro campo
            formData.append('idAnuncio', validacion.idAnuncio);
            await uploadImage(formData);

            // Cierra el modal después de guardar el anuncio
            modal.style.display = "none";
            window.location.reload();
        } else {
            alert(validacion.message);
        }
    });
});
