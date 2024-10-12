document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los inputs dentro del formulario
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        // Guardar el placeholder original para restaurarlo luego
        const placeholderOriginal = input.getAttribute('placeholder');

        // Remover el placeholder al hacer clic (evento focus)
        input.addEventListener('focus', function() {
            input.setAttribute('placeholder', '');
        });

        // Restaurar el placeholder cuando el campo pierda el foco (evento blur)
        input.addEventListener('blur', function() {
            input.setAttribute('placeholder', placeholderOriginal);
        });
    });
});