document.addEventListener("DOMContentLoaded",function() {

    const formulario = document.getElementById("formulario-registrar");

    formulario.addEventListener('submit', function(event){
        
        event.preventDefault();

        const registerNombre = document.getElementById("registerNombre").value;
        const registerPassword = document.getElementById("registerPassword").value;
        const registerCorreo = document.getElementById("registerCorreo").value;
        const registerTipo = document.getElementById("registerTipo").value;
        

        const usuarios = {
            username: registerNombre,
            password: registerPassword,
            email: registerCorreo,
            tipo: registerTipo
        };

        console.log("Datos registrados: " , usuarios);
        createUser(usuarios);
        
    });

});

