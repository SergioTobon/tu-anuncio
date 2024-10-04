// Obtener los elementos del modal de lugares
const modalLugar = document.getElementById("lugares-modal");
const btnLugar = document.getElementById("btn-lugares");
const closeModalLugarBtn = document.getElementsByClassName("btn-close-lugares")[0]; // Cambiado a 'btn-close-lugares'

// Cuando se hace clic en el botón "Lugar", se muestra el modal
btnLugar.onclick = function() {
    modalLugar.style.display = "block";
}

// Cuando se hace clic en la 'x' del modal de lugares, se cierra
closeModalLugarBtn.onclick = function() {
    modalLugar.style.display = "none";
}

// Cuando se hace clic fuera del modal de lugares, también se cierra
window.addEventListener("click", function(event) {
if (event.target === modalLugar) {
    modalLugar.style.display = "none";
}
});
// Función que maneja la selección del lugar
function choosePlace(place) {
    alert("Has seleccionado el lugar: " + place);
    modalLugar.style.display = "none"; // Cierra el modal después de seleccionar
}