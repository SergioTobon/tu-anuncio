function cerrarSesion() {
    debugger
    saveField('iniciar sesion', false);
    localStorage.removeItem('usuario'); // Eliminar el campo 'usuario' del localStorage
    document.getElementById("cerrar-sesion").style.display = "none"; // Ocultar el botón de cerrar sesión
    document.getElementById("iniciar-sesion").style.display = "block"; // Mostrar el botón de iniciar sesión
    document.getElementById("crear-negocio").style.display = "none"; 
    document.getElementById("div-mis-negocios").style.display = "none"; // Ocultar el botón 
    window.location.href = "../index.html"; // Redirige al inicio
}

