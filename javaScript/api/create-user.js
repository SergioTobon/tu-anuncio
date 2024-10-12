const url = 'http://localhost:3000/api/usuarios/create-user';

function createUser(user) {
    // Obtener el formulario y verificar su validez
    const formulario = document.getElementById("formulario-registrar");
    
    if (!formulario.checkValidity()) {
        // Si el formulario no es válido, evita el envío
        formulario.reportValidity(); // Muestra mensajes de validación
        return;
    }

    const opciones = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch(url, opciones)
        .then(response => {
            if (!response.ok) { 
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta de la API:', data);

            // Vaciar los campos del formulario
            document.getElementById("registerNombre").value = "";
            document.getElementById("registerPassword").value = "";
            document.getElementById("registerCorreo").value = "";
            document.getElementById("registerTipo").value = "seleccione"; // Restablecer el valor del select

            // Mostrar el check si el registro fue exitoso
            const checkContainer = document.querySelector('.check-container');
            const checkImg = document.querySelector('.check-img');

            // Muestra el contenedor
            checkContainer.style.display = 'flex'; // Muestra el contenedor

            // Usar un timeout para hacer que el check aparezca gradualmente
            setTimeout(() => {
                checkImg.classList.add('check-show'); // Añade la clase para hacer el check visible
            }, 50); // Agrega un pequeño retraso para la transición

            setTimeout(() => {
                // Primero eliminamos la clase para mostrar y luego añadimos la clase para ocultar
                checkImg.classList.remove('check-show'); // Comienza a ocultar
                checkImg.classList.add('check-hide'); // Aplica la clase para reducir

                // Ocultar el contenedor después de un tiempo
                setTimeout(() => {
                    checkContainer.style.display = 'none'; // Oculta el contenedor
                    checkImg.classList.remove('check-hide'); // Restablece la opacidad y escala
                }, 500); // Espera a que termine la animación de desaparición
            }, 700); // Mantiene el check visible durante 2 segundos
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
