document.addEventListener("DOMContentLoaded",function() {

    const formulario = this.getElementById("formulario-registrar");

    formulario.addEventListener('submit', function(event){
        
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const password = document.getElementById("password").value;
        const correo = document.getElementById("correo").value;
        const tipo = document.getElementById("tipo").value;
        

        const usuarios = {
            username: nombre,
            password: password,
            email: correo,
            tipo: tipo
        };

        console.log("Datos registrados: " , usuarios);
        createUser(usuarios);
        
    });

});

