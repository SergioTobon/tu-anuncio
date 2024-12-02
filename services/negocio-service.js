import NegocioRepository from '../repositories/negocio-repository.js';

class NegocioService {

    constructor() {
        this.NegocioRepository = new NegocioRepository();
    }
    async createNegocio(negocio) {

        if (!negocio.nombre || !negocio.nombre.trim()) {
            throw new Error('El nombre del negocio es obligatorio y no puede estar vacío o contener solo espacios.');
        }

        if (!negocio.idUsuario || isNaN(negocio.idUsuario) || negocio.idUsuario <= 0) {
            throw new Error('El ID del usuario es obligatorio, debe ser un número válido y mayor que cero.');
        }

        if (!negocio.idCategoria || isNaN(negocio.idCategoria) || negocio.idCategoria <= 0) {
            throw new Error('El ID de la categoría es obligatorio, debe ser un número válido y mayor que cero.');
        }

        this.NegocioRepository.createNegocio(negocio)
    }
}
export default NegocioService;