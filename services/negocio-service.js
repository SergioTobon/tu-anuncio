import NegocioRepository from '../repositories/negocio-repository.js';

class NegocioService{

    constructor(){
        this.NegocioRepository= new NegocioRepository();
    }
    async createNegocio(negocio){

        if(negocio.nombre == null){
            throw new Error('Nombre del negocio is required');
        }
        if(negocio.idUsuario == null){
            throw new Error('usuario del negocio is required');
        }
        if(negocio.idCategoria == null){
            throw new Error('categoria del negocio is required');
        }
        this.NegocioRepository.createNegocio(negocio)
    }
}
export default NegocioService;