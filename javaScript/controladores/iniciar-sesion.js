document.addEventListener("DOMContentLoaded",function() {

    const formulario = document.getElementById("form-login");

    formulario.addEventListener('submit', async function(event){
        
        event.preventDefault();

        const correoLogin = document.getElementById("correoLogin").value;
        const passwordLogin = document.getElementById("passwordLogin").value;
        const usuarioLogin = {
            email: correoLogin,
            password: passwordLogin
        };

        console.log("Sesion Iniciada" , usuarioLogin); 
        
        const validacion = await loginUser(usuarioLogin);

        if (validacion.success) {
            const validacionTrue = true;
            const {id} = validacion.user;          
            saveField('usuario', id);
            saveField('iniciar sesion', validacionTrue);
            console.log("INICIA SESION")
            window.location.href = "../index.html"; // Redirige si la validación es exitosa
        } else {
            alert(validacion.message); // Muestra mensaje de error
        }
    });

});

