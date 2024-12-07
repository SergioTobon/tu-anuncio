import BusquedaRepository from "../repositories/busqueda-repository.js";

class BusquedaService{
    constructor(){
        this.busquedaRepository = new BusquedaRepository();
    }

    async Busqueda(categoriaId, palabraClave){
        try{
        return await this.busquedaRepository.buscarNegocios(categoriaId,palabraClave)
        }catch(error) {
            console.error("Error al buscar negocios:", error.message);
            throw error;
        }
        

    }
}

export default BusquedaService;