function obtenerImagenes() {
    // Arreglo de URLs de imágenes "quemadas"
    const imagenes = [
    "http://localhost/img/1.jpg",
    "http://localhost/img/2.jpg",
    "http://localhost/img/3.jpg",
    "http://localhost/img/4.jpg",
    "http://localhost/img/5.jpg",
    "http://localhost/img/6.jpg",
    "http://localhost/img/7.jpg",
    "http://localhost/img/8.jpg",
    "http://localhost/img/9.jpg",
    "http://localhost/img/10.jpg",
    ];
    return imagenes;
}

// Ejemplo de uso

function generarCarrusel() {
    const listaImagenes = obtenerImagenes();
    let htmlContent = "";
    // Selecciona el elemento donde insertarás el HTML
    const sliderBox = document.getElementById('slider-box');
    for (let index = 0; index < listaImagenes.length; index++) {
    htmlContent += `
            <li>
                <a href="/html/infoPublicity.html">
                    <img src="${listaImagenes[index]}" alt="Imagen ${index + 1}">
                    <div class="text">
                        <h2>IMAGEN ${index + 1}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                        accusamus ab vero itaque ea architecto quidem ullam minima qui ipsum consectetur,
                        illum repellat eaque cumque ducimus neque aperiam temporibus omnis?</p>
                    </div>
                </a>
            </li>
        `;
    }
    sliderBox.innerHTML = htmlContent;
}

generarCarrusel();