function obtenerImagenes() {
  // Arreglo de URLs de imágenes "quemadas"
    const imagenes = [
        "http://localhost/imagenes-anuncios/1.jpg",
        "http://localhost/imagenes-anuncios/2.jpg",
        "http://localhost/imagenes-anuncios/3.jpg",
        "http://localhost/imagenes-anuncios/4.jpg",
        "http://localhost/imagenes-anuncios/5.jpg",
        "http://localhost/imagenes-anuncios/6.jpg",
        "http://localhost/imagenes-anuncios/7.jpg",
        "http://localhost/imagenes-anuncios/8.jpg",
        "http://localhost/imagenes-anuncios/9.jpg",
        "http://localhost/imagenes-anuncios/10.jpg",
    ];
    return imagenes;
}

// Ejemplo de uso

function generarCarrusel() {
    const listaImagenes = obtenerImagenes();
    let htmlContent = "";
    // Selecciona el elemento donde insertarás el HTML
    const track = document.getElementById('track');
    for (let index = 0; index < listaImagenes.length; index++) {
    htmlContent += `
            <div class="carrusel">        
                <div>       
                    <a href="/html/categoryPublicity.html" target="_blank">
                    <h4> <small>Imagen</small>mas</h4>
                    <picture>
                        <img src="${listaImagenes[index]}" alt="imagen">
                    </picture>
                    </a>       
                </div>       
            </div>
`;
    }
    track.innerHTML = htmlContent;
    console.log(htmlContent);
}

generarCarrusel();



// Inserta el HTML

