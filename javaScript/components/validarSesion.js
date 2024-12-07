document.addEventListener("DOMContentLoaded", function() {

    const validacionTrue = getField('iniciar sesion');
    if (validacionTrue == true) {
        document.getElementById("iniciar-sesion").style.display = "none"; 
        document.getElementById("crear-negocio").style.display = "block "; 
        document.getElementById("cerrar-sesion").style.display = "block "; 
        document.getElementById("icono-crear-negocio").style.display = "block";
        document.getElementById("mis-negocios").style.display = "block";
    }    
});