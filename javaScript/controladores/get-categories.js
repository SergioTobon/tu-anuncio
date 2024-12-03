document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById("business-category");

    async function populateCategories() {
        try {
            const categories = await getCategories();

            if (categories.length === 0) {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No hay categorías disponibles";
                selectElement.appendChild(option);
                return;
            }

            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id; // Supongamos que la categoría tiene un ID
                option.textContent = category.nombre; // Supongamos que la categoría tiene un nombre
                selectElement.appendChild(option);
            });
        } catch (error) {
            console.error('Error al llenar el select:', error);
        }
    }

    // Llenar el select al cargar la página
    await populateCategories();
});
