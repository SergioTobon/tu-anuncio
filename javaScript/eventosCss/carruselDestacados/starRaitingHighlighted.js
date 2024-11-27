document.querySelectorAll('.star-rating input').forEach(input => {
    input.addEventListener('change', function() {
        let ratingValue = this.value;
        let imageNumber = this.name.replace('rating', '');
        console.log('Imagen ' + imageNumber + ' recibió una puntuación de ' + ratingValue + ' estrellas.');
        // Aquí puedes enviar el valor al servidor o procesarlo según tus necesidades
    });
});
