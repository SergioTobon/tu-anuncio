// Crear los elementos con las categorías obtenidas de la API
async function populateCategories() {
    try {
        const categories = await getCategories(); // Obtiene las categorías desde la API

        // Verifica si hay categorías
        if (!categories || categories.length === 0) {
            console.error('No se encontraron categorías');
            return;
        }

        // Itera sobre las categorías y crea los elementos
        categories.forEach((category, i) => {
            const gridItem = document.createElement('div'); // Crear un nuevo div
            gridItem.classList.add('grid-item'); // Agregar la clase 'grid-item'
            
            // Crear la imagen (o cualquier otro contenido que necesites)
            const image = document.createElement('img');
            image.src = `/imagenes-carrusel/images/${i + 1}.jpg`; // Usar una imagen de ejemplo (ajustar si es necesario)
            image.alt = category.nombre; // Usar el nombre de la categoría
            gridItem.appendChild(image); // Añadir la imagen al grid item
            
            // Crear el nombre de la categoría
            const categoryName = document.createElement('div');
            categoryName.classList.add('category-name');
            categoryName.textContent = category.nombre; // Nombre de la categoría
            gridItem.appendChild(categoryName); // Añadir el nombre al grid item
            
            // Agregar el grid item al contenedor
            gridContainer.appendChild(gridItem);
        });
    } catch (error) {
        console.error('Error al llenar el contenedor:', error);
    }
}

// Llenar el contenedor con las categorías al cargar la página
populateCategories();