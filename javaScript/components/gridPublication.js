// Este código se ejecuta cuando la página esté completamente cargada
window.onload = function() {
    // Número total de publicaciones que deseas mostrar
    const totalPublicaciones = 24;

    // Referencia al contenedor donde se agregarán las publicaciones
    const gridContainer = document.getElementById('grid-container');

    // Crear las publicaciones dinámicamente
    for (let i = 1; i <= totalPublicaciones; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.textContent = `Publicación ${i}`; // Se agrega el texto de la publicación
        gridContainer.appendChild(div); // Se agrega el div al contenedor
    }
};
