document.addEventListener("DOMContentLoaded",function() {

    const formulario = document.getElementById("formulario-registrar");

    formulario.addEventListener('submit', async function(event){
        
        event.preventDefault();

        const registerNombre = document.getElementById("registerNombre").value;
        const registerPassword = document.getElementById("registerPassword").value;
        const registerCorreo = document.getElementById("registerCorreo").value;
        
        const usuarios = {
            username: registerNombre,
            password: registerPassword,
            email: registerCorreo,
        };

        console.log("Datos registrados: " , usuarios);
        const validacion = await createUser(usuarios);

        console.log(validacion);
        

        if (validacion.success) {
            window.location.href = "/html/login.html";
        }else{
            alert(validacion.message); 
        }
        
    });

});

