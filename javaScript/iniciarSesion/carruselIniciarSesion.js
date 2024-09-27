const carrusel = document.querySelector('.carrusel');
const imagenes = [
    '/imagenes-carrusel/images/1.jpg',
    '/imagenes-carrusel/images/2.jpg',
    '/imagenes-carrusel/images/3.jpg',
    '/imagenes-carrusel/images/4.jpg',
    '/imagenes-carrusel/images/5.jpg',
    '/imagenes-carrusel/images/6.jpg',
    '/imagenes-carrusel/images/7.jpg',
    '/imagenes-carrusel/images/8.jpg',
    '/imagenes-carrusel/images/9.jpg',
    '/imagenes-carrusel/images/10.jpg'
];

// Agregar imágenes al carrusel
imagenes.forEach(imagen => {
    const imgElement = document.createElement('img');
    imgElement.src = imagen;
    imgElement.alt = 'Imagen de carrusel';
    carrusel.appendChild(imgElement);
});

// Crear un elemento duplicado para hacer el efecto de ciclo
imagenes.forEach(imagen => {
    const imgElement = document.createElement('img');
    imgElement.src = imagen;
    imgElement.alt = 'Imagen de carrusel';
    carrusel.appendChild(imgElement);
});

// Control del índice
let currentIndex = 0;
const totalImages = imagenes.length;

function moveToNextImage() {
    // Cambiar al índice de la siguiente imagen
    currentIndex++;

    // Si llega a la imagen 10, salta directamente a la imagen 1
    if (currentIndex > totalImages) {
        currentIndex = 1; // Asegúrate de que empieza desde la imagen 1
        // Coloca la imagen 1 al final del carrusel para un efecto infinito
        setTimeout(() => {
            carrusel.style.transition = 'none'; // Desactiva la transición para este salto
            carrusel.style.transform = `translateX(0%)`; // Regresa a la imagen 1
        }, 500); // Espera medio segundo (la duración de la transición) antes de volver a activar la transición
    } else {
        carrusel.style.transition = 'transform 0.5s ease-in-out'; // Vuelve a activar la transición
        const offset = -currentIndex * 100; // Mueve 100% por imagen
        carrusel.style.transform = `translateX(${offset}%)`;
    }
}

// Cambia de imagen cada 3 segundos
setInterval(moveToNextImage, 3000);
