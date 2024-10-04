 // Obtener los elementos
const modal = document.getElementById("categoriesModal");
const btnCategoria = document.getElementById("btnCategoria");
const closeModalBtn = document.getElementsByClassName("close")[0];

 // Cuando se hace clic en el div "Categorías", se muestra el modal
btnCategoria.onclick = function() {
    modal.style.display = "block";
}

 // Cuando se hace clic en la 'x', se cierra el modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

 // Cuando se hace clic fuera del modal, también se cierra
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
 // Función que maneja la selección de la categoría
function chooseCategory(category) {
    alert("Has seleccionado la categoría: " + category);
    modal.style.display = "none"; // Cierra el modal después de seleccionar
}