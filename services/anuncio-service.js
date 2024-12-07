import AnuncioRepository from '../repositories/anuncio-repository.js';
import NegocioService from '../services/negocio-service.js';

class AnuncioService{    
    constructor(){
        this.anuncioRepository = new AnuncioRepository();
        this.NegocioService = new NegocioService();
    }

    async createAnuncio(anuncio) {

        this.NegocioService.validarNegocio(anuncio.idNegocio)
        
        // Validar que el nombre sea válido
        if (!anuncio.nombre || !anuncio.nombre.trim()) {
            throw new Error('El nombre del anuncio es obligatorio y no puede estar vacío.');
        }
        // Validar que el precio sea válido
        if (anuncio.precio == null || anuncio.precio === '') {
            throw new Error('El precio del anuncio es obligatorio.');
        }
        if (isNaN(anuncio.precio) || anuncio.precio <= 0) {
            throw new Error('El precio del anuncio debe ser un número mayor que cero.');
        }
        
        // Si pasa todas las validaciones, crea el anuncio
        const idAnuncio = await this.anuncioRepository.createAnuncio(anuncio);
        console.log(idAnuncio);

        console.log(idAnuncio);
        
        if (idAnuncio) {
            console.log("entro por el if");
            
            return { success: true, message: "anuncio creado", idAnuncio};
        } else {
            console.log("entro por el else");
            return { success: false, message: "error al crear el anuncio" };
        }
            
    }

    async validarAnuncio(id) {
        try {
            // Validar que el ID no sea nulo ni vacío
            if (!id || isNaN(id) || id <= 0) {
                throw new Error("El ID del anuncio debe ser un número válido mayor que cero.");
            }

            const anuncio = await this.anuncioRepository.obtenerAnuncioPorId(id);

            // Validar si se encontró el negocio
            if (anuncio.length === 0) {
                throw new Error(`No se encontró un anuncio con el ID ${id}.`);
            }

            return anuncio[0]; // Retornamos el negocio encontrado
        } catch (error) {
            console.error("Error al validar el anuncio:", error.message);
            throw error;
        }
    }

    async updateUrlImagenAnuncio(id, urlImagenes){
        try {
            const resultado = await this.anuncioRepository.updateUrlImagenAnuncio(id,urlImagenes);
            console.log("URL del Anuncio ID${id} actualizada correctamente");
            return{message: "URL actualizada exitosamente" ,resultado};
        } catch (error) {
            console.log("Error en el servicio de la actualizacio",error.message); 
            throw error;                     
        }       
    }

    async getAnuncioByIdNegocioService(idNegocio){
        return await this.anuncioRepository.getAnuncioByIdNegocio(idNegocio)
    } 

}

export default AnuncioService;