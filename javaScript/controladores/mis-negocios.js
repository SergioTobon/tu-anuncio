document.getElementById("mis-negocios").addEventListener("change", function(event) {
    const negocioId = event.target.value; // Obtiene el valor de la opción seleccionada

    if (negocioId) {
        // Redirige a la página deseada pasando el id del negocio en la URL
        window.location.href = `/html/infoPublicity.html?id=${negocioId}`;
    } else {
        alert("Por favor, selecciona un negocio válido.");
    }
});
