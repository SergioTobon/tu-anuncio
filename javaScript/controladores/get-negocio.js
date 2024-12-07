document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById("mis-negocios");

    async function getMisNegocios() {

        try {
            const usuarioId =  getField('usuario');
            const misNegocios = await getNegocios(usuarioId);
            if (misNegocios.length === 0) {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "no hay negocios disponibles";
                selectElement.appendChild(option);
                return;
            }

            misNegocios.forEach(negocio => {
                const option = document.createElement('option');
                option.value = negocio.id; // Supongamos que la categoría tiene un ID
                option.textContent = negocio.nombre; // Supongamos que la categoría tiene un nombre
                selectElement.appendChild(option);
            });
        } catch (error) {
            console.error('Error al llenar el select:', error);
        }
    }

    // Llenar el select al cargar la página
    await getMisNegocios();

    selectElement.addEventListener('change', function () {
        const selectedValue = selectElement.value;
        // Guardamos la opción seleccionada en el almacenamiento local
        localStorage.setItem('selectedNegocio', selectedValue);
        console.log("Negocio seleccionado:", selectedValue); // Hacer algo con el negocio seleccionado
    });
});
