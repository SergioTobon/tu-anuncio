document.addEventListener("DOMContentLoaded", async function () {
    const gridNegocios = document.getElementById("grid-negocios");

    // Función para mostrar los negocios en el grid
    async function mostrarGridNegocios() {
        const usuarioId = getUsuarioId(); // Obtener el ID del usuario desde localStorage
        if (!usuarioId) {
            gridNegocios.innerHTML = "<p>No se ha encontrado un usuario.</p>";
            return;
        }

        const misNegocios = await getNegocios(usuarioId); // Obtener los negocios del usuario

        if (misNegocios.length === 0) {
            gridNegocios.innerHTML = "<p>No tienes negocios disponibles.</p>";
            return;
        }

        // Limpiar el grid antes de agregar los nuevos negocios
        gridNegocios.innerHTML = '';

        // Crear un elemento para cada negocio
        misNegocios.forEach(negocio => {
            const negocioItem = document.createElement("div");
            negocioItem.classList.add("grid-negocio-item");

            // Añadir los detalles del negocio al item
            negocioItem.innerHTML = `
                <img src="${negocio.urlImagenes || 'ruta/por/defecto.png'}" alt="${negocio.nombre}">
                <h4>${negocio.nombre}</h4>
                <p>${negocio.descripcion}</p>
                <a href="/html/infoPublicity.html?id=${negocio.id}">Ver detalles</a>
            `;

            // Agregar el item al grid
            gridNegocios.appendChild(negocioItem);
        });
    }

    // Llamar a la función para llenar el grid al cargar la página
    await mostrarGridNegocios();
});