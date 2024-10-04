document.addEventListener("DOMContentLoaded",function() {



    const formulario = this.getElementById("formulario-iniciar-sesion");

    formulario.addEventListener('submit', function(event){
        
        event.preventDefault();

        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;


        const mostrarDatos = {
            correo: correo,
            password: password
        };

        console.log("Sesion Iniciada" , mostrarDatos);
        
    });

});