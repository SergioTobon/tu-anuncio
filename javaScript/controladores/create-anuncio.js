document.addEventListener("DOMContentLoaded",function() {
    const formulario = document.getElementById("form-anuncio");

    formulario.addEventListener('submit', async function(event){
        debugger
        const urlParams = new URLSearchParams(window.location.search);
        const negocioId = urlParams.get('id'); // Obtiene el ID del negocio de la URL
        
        event.preventDefault();

        const registerName= document.getElementById("nombre-anuncio").value;
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
            idNegocio:negocioId,
            nombre:registerName,
            precio:registerPrecio,

        };

        console.log("Datos registrados: " , anuncio);
        const validacion = await createAnuncio(anuncio);

        console.log(validacion);
        
        if (validacion.success) {
            const formData = new FormData();
            formData.append('imagen', file); // Añade la imagen
            formData.append('tipoImagen', 'anuncio'); // Otro campo
            formData.append('idNegocio', anuncio.idNegocio); // Otro campo
            formData.append('idAnuncio', validacion.idAnuncio)
            await uploadImage(formData);
        }else{
            alert(validacion.message); 
        }
        
    });

});

