document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("business-form");
    const selectElement = document.getElementById("mis-negocios");

    formulario.addEventListener('submit', async function(event) {
        event.preventDefault();

        const registerName = document.getElementById("business-name").value;
        const registerDescription = document.getElementById("business-description").value;
        const registerCategory = document.getElementById("business-category").value;
        const registerNumber = document.getElementById("phone-number").value;
        const registerLocation = document.getElementById("business-location").value;

        const key = "usuario";
        const registrarUsuario = getField(key);

        const negocios = {
            nombre: registerName,
            descripcion: registerDescription,
            idUsuario: registrarUsuario,
            idCategoria: Number(registerCategory),
            contacto: registerNumber,
            ubicacion: registerLocation,
        };

        const validacion = await createNegocio(negocios);

        if (validacion.success) {
            // Actualizar el select con el nuevo negocio
            await actualizarSelectConNegocios(registrarUsuario);
            // Seleccionar el nuevo negocio creado en el select
            selectElement.value = validacion.newNegocioId;
            // Redirigir a la página de infoPublicity
            window.location.href = `/html/infoPublicity.html?id=${validacion.newNegocioId}`;
        } else {
            alert(validacion.message); 
        }
    });

    // Función para obtener los negocios y actualizar el select
    async function actualizarSelectConNegocios(usuarioId) {
        try {
            const misNegocios = await getNegocios(usuarioId);
            selectElement.innerHTML = ''; // Limpiar las opciones existentes

            if (misNegocios.length === 0) {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No hay negocios disponibles";
                selectElement.appendChild(option);
                return;
            }

            // Agregar todas las opciones de negocios al select
            misNegocios.forEach(negocio => {
                const option = document.createElement('option');
                option.value = negocio.id;
                option.textContent = negocio.nombre;
                selectElement.appendChild(option);
            });

            // Mantener la opción seleccionada si existe
            const selectedValue = localStorage.getItem('selectedNegocio');
            if (selectedValue) {
                selectElement.value = selectedValue;
            }

        } catch (error) {
            console.error('Error al actualizar el select:', error);
        }
    }

    // Manejo del cambio en el select
    selectElement.addEventListener("change", function(event) {
        const negocioId = event.target.value;
        if (negocioId) {
            window.location.href = `/html/infoPublicity.html?id=${negocioId}`;
        } else {
            alert("Por favor, selecciona un negocio válido.");
        }
    });

    // Al cargar la página, actualizamos el select con los negocios del usuario
    const usuarioId = getField('usuario');
    actualizarSelectConNegocios(usuarioId);
});
