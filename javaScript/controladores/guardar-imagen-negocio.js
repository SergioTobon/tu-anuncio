async function guardarImagenNegocio() {
    const idNegocioImg = getNegocioIdFromUrl();

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

    // Crear un objeto FormData
    const formData = new FormData();
    formData.append('imagen', file); // Añade la imagen
    formData.append('tipoImagen', 'negocio'); // Otro campo
    formData.append('idNegocio', idNegocioImg); // Otro campo
    const negocioImage =  await uploadImage(formData);
    console.log(negocioImage);
    console.log("file" + file);
    console.log( "id negocio" + idNegocioImg);

    try {

        const response = await uploadImage(formData);

        if(response.success){
            const filePath = response.filePath;
            console.log(filePath);
            
            mostrarImagen(filePath);
           
        }else{
            alert("Error al guardar la imagen")
        }

    } catch (error) {
        alert("Error al guardar la imagen")
        console.error(error)
    }

}

function mostrarImagen(filePath){

    const mostrarImagen = document.getElementById("image-negocio");
    mostrarImagen.src = filePath;
    mostrarImagen.style.display="block";

    const btnGuardarNegocio = document.getElementById("btn-guardar-image-negocio");
    btnGuardarNegocio.style.display="none";

    const fileInputNegocio = document.getElementById("file-input");
    fileInputNegocio.style.display="none";

}


function ocultarImagen(){

    const mostrarImagen = document.getElementById("image-negocio");
    mostrarImagen.style.display="none";

    const btnGuardarNegocio = document.getElementById("btn-guardar-image-negocio");
    btnGuardarNegocio.style.display="block";

    const fileInputNegocio = document.getElementById("file-input");
    fileInputNegocio.style.display="block";

}


