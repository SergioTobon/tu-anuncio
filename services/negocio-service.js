import NegocioRepository from '../repositories/negocio-repository.js';
import UserService from '../services/user-service.js';
import CategoriaService from "../services/categoria-service.js"

class NegocioService {

    constructor() {
        this.NegocioRepository = new NegocioRepository();
        this.UserServices = new UserService();
        this.CategoriaService = new CategoriaService();
    }
    async createNegocio(negocio) {

        await this.UserServices.validarUser(negocio.idUsuario)

        if (!negocio.nombre || !negocio.nombre.trim()) {
            throw new Error('El nombre del negocio es obligatorio y no puede estar vacío o contener solo espacios.');
        }
        const validarNegocio = this.NegocioRepository.createNegocio(negocio)

        if (validarNegocio) {
            return { success: true, message: "Negocio creado correctamente", validarNegocio };
        } else {
            return { success: false, message: "Error al crear el negocio" };
        }
    }

    async validarNegocio(id) {
        try {
            // Validar que el ID no sea nulo ni vacío
            if (!id || isNaN(id) || id <= 0) {
                throw new Error("El ID de negocio debe ser un número válido mayor que cero.");
            }

            const negocios = await this.NegocioRepository.obtenerNegocioPorId(id);

            // Validar si se encontró el negocio
            if (negocios.length === 0) {
                throw new Error(`No se encontró un negocio con el ID ${id}.`);
            }

            return negocios[0]; // Retornamos el negocio encontrado
        } catch (error) {
            console.error("Error al validar el negocio:", error.message);
            throw error;
        }
    }

    async getNegocioByIdUsuarioService(idUsuario) {
        return await this.NegocioRepository.getNegocioByIdUsuario(idUsuario)
    }


    async updateUrlImagenNeogocio(id, urlImagenes){
        try {
            const resultado = await this.NegocioRepository.updateUrlImagenNeogocio(id, urlImagenes);

            console.log("URL del negocio ID${id} actualizada correctamente");
            return{message: "URL actualizada exitosamente" ,resultado};
        } catch (error) {
            console.log("Error en el servicio de la actualizacio",error.message); 
            throw error;                     
        }       
    }

}
export default NegocioService;