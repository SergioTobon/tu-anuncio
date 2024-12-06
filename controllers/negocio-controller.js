import NegocioService from "../services/negocio-service.js";

export const createNegocio = async (req, res)=> {
    try {
        const negocio = req.body;
        const negocioService = new NegocioService();
    
        await negocioService.createNegocio(negocio);
        res.status(201).json({ message: "Negocio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

export const validarNegocio = async (req, res )=> {
    try {
        const {id} = req.params;
        const negocioService = new NegocioService();
    
        const negocio = await negocioService.validarNegocio(id);
        if (negocio) {
            return res.status(200).json(negocio); 
        } else {
            return res.status(404).json({ success: false, message: "anuncio no encontrado" });  // Error 404 si no existe
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}