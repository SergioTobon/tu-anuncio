// Obtener elementos del DOM


function createAnuncioForm(){
    const modal = document.getElementById('modal');
    const btnCrearAnuncio = document.querySelector('.btn-create-anuncio');
    const spanCerrar = document.querySelector('.close');
    
    // Mostrar el modal cuando se hace clic en el botón
    btnCrearAnuncio.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Cerrar el modal cuando se hace clic en la "X"
    spanCerrar.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    btnCrearAnuncio.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    

}

