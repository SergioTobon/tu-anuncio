import NegocioService from "../services/negocio-service.js";

export const createNegocio = async (req, res)=> {
    try {
        const negocio = req.body;
        const negocioService = new NegocioService();
    
        const result = await negocioService.createNegocio(negocio);
        if (result.success) {
            return res.status(201).json(result);
        } else {
            return res.status(401).json(result);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

export const validarNegocio = async (req, res )=> {
    try {
        const id = req.body;
        const negocioService = new NegocioService();
    
        await negocioService.validarNegocio(id);
        res.status(200).json({ message: "Negocio si existe" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}