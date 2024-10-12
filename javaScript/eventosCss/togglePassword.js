document.addEventListener("DOMContentLoaded", function() {

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("passwordLogin");

    togglePassword.addEventListener('click', function() {
        // Cambiar el tipo de input entre 'password' y 'text'
        const inputType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', inputType);

        // Cambiar el icono de mostrar/ocultar
        if (inputType === 'text') {
            togglePassword.src = "/iconos/contraseña.png";  // Icono de ocultar contraseña
            togglePassword.alt = "Ocultar contraseña";
        } else {
            togglePassword.src = "/iconos/ocultar-contraseña.png";  // Icono de mostrar contraseña
            togglePassword.alt = "Mostrar contraseña";
        }
    });

});
