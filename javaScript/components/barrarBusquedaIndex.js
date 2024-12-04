// Lógica para desplegable de categorías
document.querySelector('.btn-categorias').addEventListener('click', () => {
    const categoriasContainer = document.querySelector('.categorias-index');
    categoriasContainer.classList.toggle('open');
});

// Cerrar desplegable si se hace clic fuera
document.addEventListener('click', (event) => {
    const categoriasContainer = document.querySelector('.categorias-index');
    if (!categoriasContainer.contains(event.target)) {
        categoriasContainer.classList.remove('open');
    }
});
