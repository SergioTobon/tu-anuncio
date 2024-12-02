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
        const id = req.body;
        const negocioService = new NegocioService();
    
        await negocioService.validarNegocio(id);
        res.status(201).json({ message: "Negocio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}