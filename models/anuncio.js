export class Anuncio {
    constructor(id, nombre, descripcion, precio, idNegocio, urlImagenes) {
        this.id = id;
        this.nombre = nombre;
        this.urlImagenes = urlImagenes;
        this.descripcion = descripcion;
        this.precio = precio;
        this.idNegocio = idNegocio;
    }
}