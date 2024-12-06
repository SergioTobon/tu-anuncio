import AnuncioService from "../services/anuncio-service.js";

export const createAnuncio = async (req, res)=> {
    try {
        const anuncio = req.body;
        const anuncioService = new AnuncioService();
    
        await anuncioService.createAnuncio(anuncio);
        res.status(201).json({ message: "Anuncio creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

export const validarAnuncio = async (req, res )=> {
        try {
            const id = req.body;
            const anuncioService = new AnuncioService();
        
            await anuncioService.validarAnuncio(id);
            res.status(200).json({ message: "Anuncio si existe" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            
        }   
};

export const getAnuncioByIdNegocioController = async (req, res)=> {
    const anuncioService = new AnuncioService();
    const {idNegocio} = req.params;
    try {
        const anuncio = await anuncioService.getAnuncioByIdNegocioService(idNegocio);
        if (anuncio) {
            return res.status(200).json(anuncio); 
        } else {
            return res.status(404).json({ success: false, message: "anuncio no encontrado" });  // Error 404 si no existe
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });  // Error
    }
};  