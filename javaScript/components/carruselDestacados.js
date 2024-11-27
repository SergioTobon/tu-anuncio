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
    const sliderBox = document.getElementById('slider-box');
    for (let index = 0; index < listaImagenes.length; index++) {
    htmlContent += `
            <li>
                <a href="/html/infoPublicity.html">
                    <img src="${listaImagenes[index]}" alt="Imagen ${index + 1}">
                    <div class="text">
                        <h2>IMAGEN ${index + 1}</h2>
                        <div class="star-rating">
                            <input type="radio" id="star5-${index + 1}" name="rating${index + 1}" value="5"><label for="star5-${index + 1}" title="5 stars">★</label>
                            <input type="radio" id="star4-${index + 1}" name="rating${index + 1}" value="4"><label for="star4-${index + 1}" title="4 stars">★</label>
                            <input type="radio" id="star3-${index + 1}" name="rating${index + 1}" value="3"><label for="star3-${index + 1}" title="3 stars">★</label>
                            <input type="radio" id="star2-${index + 1}" name="rating${index + 1}" value="2"><label for="star2-${index + 1}" title="2 stars">★</label>
                            <input type="radio" id="star1-${index + 1}" name="rating${index + 1}" value="1"><label for="star1-${index + 1}" title="1 star">★</label>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                        accusamus ab vero itaque ea architecto quidem ullam minima qui ipsum consectetur,
                        illum repellat eaque cumque ducimus neque aperiam temporibus omnis?</p>
                    </div>
                </a>
            </li>
        `;
    }
    sliderBox.innerHTML = htmlContent;
    console.log(htmlContent);
}

generarCarrusel();