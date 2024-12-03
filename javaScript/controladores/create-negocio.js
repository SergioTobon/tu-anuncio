document.addEventListener("DOMContentLoaded",function() {

    const formulario = document.getElementById("business-form");

    formulario.addEventListener('submit', async function(event){
        
        event.preventDefault();

        const registerName= document.getElementById("business-name").value;
        const registerDescription = document.getElementById("business-description").value;
        const registerCategory = document.getElementById("business-category").value;
        const registerNumber = document.getElementById("phone-number").value;
        const registerLocation = document.getElementById("business-location").value

        console.log(registerCategory);
        
        const key = "usuario";
        const registrarUsuario = getField(key);
        console.log(registrarUsuario);
        
        const negocios = {
            nombre: registerName,
            descripcion: registerDescription,
            idUsuario: registrarUsuario,
            idCategoria: Number(registerCategory),
            contacto: registerNumber,
            ubicacion: registerLocation,
        };

        console.log("Datos registrados: " , negocios);
        const validacion = await createNegocio(negocios);

        console.log(validacion);
        
        if (validacion.success) {
            window.location.href = "/html/infoPublicity.html";
        }else{
            alert(validacion.message); 
        }
        
    });

});

