// Obtener el contenedor donde se agregarán los elementos
const gridContainer = document.querySelector('.grid-container');

// Definir las categorías y las rutas de las imágenes
const categories = [
    "COMIDA", "ELECTRONICA", "MODA", "HOSPEDAJE", "BEBIDAS",
    "AUTOMOTRIZ", "ENTRETENIMIENTO", "FINANZAS", "EDUCACION", "HOGAR"
];
const imagePaths = [
    "/imagenes-carrusel/images/1.jpg", "/imagenes-carrusel/images/1.jpg", "/imagenes-carrusel/images/3.jpg", "/imagenes-carrusel/images/1.jpg", "/imagenes-carrusel/images/1.jpg",
    "/imagenes-carrusel/images/2.jpg", "/imagenes-carrusel/images/1.jpg", "/imagenes-carrusel/images/1.jpg", "/imagenes-carrusel/images/4.jpg", "/imagenes-carrusel/images/5.jpg"
];

// Crear 10 elementos con la clase 'grid-item'
for (let i = 0; i < 10; i++) {
    const gridItem = document.createElement('div'); // Crear un nuevo div
    gridItem.classList.add('grid-item'); // Agregar la clase 'grid-item'
    
    // Crear la imagen
    const image = document.createElement('img');
    image.src = imagePaths[i]; // Asignar la ruta de la imagen
    image.alt = categories[i]; // Asignar un texto alternativo
    gridItem.appendChild(image); // Añadir la imagen al grid item
    
    // Crear el nombre de la categoría
    const categoryName = document.createElement('div');
    categoryName.classList.add('category-name');
    categoryName.textContent = categories[i]; // Nombre de la categoría
    gridItem.appendChild(categoryName); // Añadir el nombre al grid item
    
    // Agregar el grid item al contenedor
    gridContainer.appendChild(gridItem);
}
