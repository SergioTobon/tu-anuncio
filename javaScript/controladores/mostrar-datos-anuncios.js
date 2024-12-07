document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const idNegocio = urlParams.get('id'); // Obtén el ID del negocio desde la URL

    if (!idNegocio) {
        return;
    }

    // Llama a la función para obtener los anuncios
    const anuncios = await getAnunciosPorNegocio(idNegocio);

    if (anuncios && anuncios.length > 0) {
        const gridAnuncios = document.getElementById('grid-anuncios');

        anuncios.forEach(anuncio => {
            // Crea el elemento de la cuadrícula
            const anuncioItem = document.createElement('div');
            anuncioItem.classList.add('grid-anuncio-item');

            // Añade el contenido del anuncio
            anuncioItem.innerHTML = `
                <img src="${anuncio.urlImagenes}" />
                <h4>${anuncio.nombre}</h4>
                <p>$${anuncio.precio}</p>
            `;

            // Añade el elemento al grid
            gridAnuncios.appendChild(anuncioItem);
        });
    } else {
        alert('No se encontraron anuncios para este negocio');
    }
});
